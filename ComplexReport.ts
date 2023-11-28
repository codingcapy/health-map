import HealthMap from "./Map";


export default class ComplexReport {
    private _map:HealthMap
    constructor(map: HealthMap) {
        this._map = map;
    }
    printDetails(){
        console.log(this._map.getClinics())
    }
}