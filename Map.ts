

import Household from "./Household";
import Clinic from "./Clinic";
import Person from "./Person";
import Queue from "./Queue";

export default class HealthMap {
  private _mapData: any;
  private _currentIntake: number;
  private _maxLength
  private _burnabyHouseholds;
  private _burnabyClinics;
  private _vancouverHouseholds;
  private _vancouverClinics;
  private _richmondHouseholds;
  private _richmondClinics;
  private _burnabyBlocks;
  private _vancouverBlocks;
  private _richmondBlocks;

  // constructors, methods, etc
  constructor(map: any, currentIntake: number) {
    this._mapData = map
    this._currentIntake = currentIntake
    const burnabyHouseholds: Household[] = []
    const burnabyClinics: Clinic[] = []
    const vancouverHouseholds: Household[] = []
    const vancouverClinics: Clinic[] = []
    const richmondHouseholds: Household[] = []
    const richmondClinics: Clinic[] = []
    let burnabyBlocks: any[] = []
    let vancouverBlocks: any[] = []
    let richmondBlocks: any[] = []

    this._mapData.city.Burnaby.households.forEach((h: any) => {
      const household = new Household("Burnaby", h.inhabitants, h.blockNum)
      burnabyHouseholds.push(household)
    })
    this._mapData.city.Burnaby.clinics.forEach((c: any) => {
      const clinic = new Clinic(c.name, c.blockNum, c.staff, new Queue())
      burnabyClinics.push(clinic)
    })

    this._mapData.city.Vancouver.households.forEach((h: any) => {
      const household = new Household("Vancouver", h.inhabitants, h.blockNum)
      vancouverHouseholds.push(household)
    })
    this._mapData.city.Vancouver.clinics.forEach((c: any) => {
      const clinic = new Clinic(c.name, c.blockNum, c.staff, new Queue())
      vancouverClinics.push(clinic)
    })

    this._mapData.city.Richmond.households.forEach((h: any) => {
      const household = new Household("Richmond", h.inhabitants, h.blockNum)
      richmondHouseholds.push(household)
    })
    this._mapData.city.Richmond.clinics.forEach((c: any) => {
      const clinic = new Clinic(c.name, c.blockNum, c.staff, new Queue())
      richmondClinics.push(clinic)
    })

    this._burnabyHouseholds = burnabyHouseholds;
    this._burnabyClinics = burnabyClinics;
    this._vancouverHouseholds = vancouverHouseholds;
    this._vancouverClinics = vancouverClinics;
    this._richmondHouseholds = richmondHouseholds;
    this._richmondClinics = richmondClinics;

    let maxLength = burnabyHouseholds.length + burnabyClinics.length;
    if (maxLength < vancouverHouseholds.length + vancouverClinics.length) {
      maxLength = vancouverHouseholds.length + vancouverClinics.length
    }
    else if (maxLength < richmondHouseholds.length + richmondClinics.length) {
      maxLength = richmondHouseholds.length + richmondClinics.length
    }
    this._maxLength = maxLength

    for (let i = 0; i < this._maxLength; ++i) {
      if (this._burnabyHouseholds[i]) {
        if (this._burnabyHouseholds[i].getInhabitants().find((inhabitant: any) => inhabitant.isVaccinated == false && inhabitant.age >= this._currentIntake)) {
          burnabyBlocks[this._burnabyHouseholds[i].getBlockNum()] = "H"
        }
        else {
          burnabyBlocks[this._burnabyHouseholds[i].getBlockNum()] = "F"
        }
      }
      if (this._burnabyClinics[i]) {
        burnabyBlocks[this._mapData.city.Burnaby.clinics[i].blockNum] = "C"
      }
      if (burnabyBlocks[i] === undefined) {
        burnabyBlocks[i] = 'x'
      }
    }

    for (let i = 0; i < this._maxLength; ++i) {
      if (this._vancouverHouseholds[i]) {
        if (this._vancouverHouseholds[i].getInhabitants().find((inhabitant: any) => inhabitant.isVaccinated == false && inhabitant.age >= this._currentIntake)) {
          vancouverBlocks[this._vancouverHouseholds[i].getBlockNum()] = "H"
        }
        else {
          vancouverBlocks[this._vancouverHouseholds[i].getBlockNum()] = "F"
        }
      }
      if (this._vancouverClinics[i]) {
        vancouverBlocks[this._mapData.city.Vancouver.clinics[i].blockNum] = "C"
      }
      if (vancouverBlocks[i] === undefined) {
        vancouverBlocks[i] = 'x'
      }
    }

    for (let i = 0; i < this._maxLength; ++i) {
      if (this._richmondHouseholds[i]) {
        if (this._richmondHouseholds[i].getInhabitants().find((inhabitant: any) => inhabitant.isVaccinated == false && inhabitant.age >= this._currentIntake)) {
          richmondBlocks[this._richmondHouseholds[i].getBlockNum()] = "H"
        }
        else {
          richmondBlocks[this._richmondHouseholds[i].getBlockNum()] = "F"
        }
      }
      if (this._richmondClinics[i]) {
        richmondBlocks[this._mapData.city.Richmond.clinics[i].blockNum] = "C"
      }
      if (richmondBlocks[i] === undefined) {
        richmondBlocks[i] = 'x'
      }
    }

    this._burnabyBlocks = burnabyBlocks
    this._vancouverBlocks = vancouverBlocks
    this._richmondBlocks = richmondBlocks
  }
  printMap() {
    console.log(this._burnabyBlocks)
    console.log(this._vancouverBlocks)
    console.log(this._richmondBlocks)
  }
  registerForShots() {
    for (let j = 0; j < this._burnabyHouseholds.length; j++) {
      for (let i = 0; i < this._burnabyHouseholds[j].getInhabitants().length; i++) {
        if (this._burnabyHouseholds[j].getInhabitants()[i].getIsVaccinated()) continue
        if (this._burnabyHouseholds[j].getInhabitants()[i].getAge() < this._currentIntake) continue
        this._burnabyBlocks.forEach((block) => {
          if (block === "C") {
            this._burnabyClinics[0].getQueue().enqueue(this._burnabyHouseholds[j].getInhabitants()[i])
          }
        })
      }
    }
  }
}