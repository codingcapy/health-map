

export default class Person {
    private _phn: string;
    private _fullName: string;
    private _isVaccinated: boolean;
    private _age: number;

    constructor(phn: string, fullName: string, isVaccinated: boolean, age: number) {
        this._phn = phn
        this._fullName = fullName
        this._isVaccinated = isVaccinated
        this._age = age
    }
    getIsVaccinated(){
        return this._isVaccinated;
    }
    getAge(){
        return this._age;
    }
}