import HealthMap from "./Map";


export default class SimpleReport {
    private _map:HealthMap
    constructor(map: HealthMap) {
        this._map = map;
    }
    printDetails(){
        this._map.getClinics().forEach((clinic:any)=>{
            console.log(clinic.name)
            console.log(clinic.lineup)
            console.log('\n')
        })
    }
}