
import Person from "./Person";

export default class Household {
    private _city: string;
    private _inhabitants: any;
    private _blockNum: number;
    private _persons: Person[];

    constructor(city: string, inhabitants: any, blockNum: number) {
        this._city = city;
        this._inhabitants = inhabitants;
        this._blockNum = blockNum;
        const persons: Person[] = []
        this._inhabitants.forEach((i: any) => {
            const inhabitant = new Person(i.phn, i.fullName, i.isVaccinated, i.age)
            persons.push(inhabitant)
        })
        this._persons = persons;
    }
    getInhabitants() {
        return this._persons
    }
    getBlockNum() {
        return this._blockNum
    }
}