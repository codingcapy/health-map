

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
    getIsVaccinated() {
        return this._isVaccinated;
    }

    setIsVaccinated(state:boolean) {
        this._isVaccinated = state
    }

    getAge() {
        return this._age;
    }

    getFullName(){
        return this._fullName
    }

    getPhn(){
        return this._phn
    }
}