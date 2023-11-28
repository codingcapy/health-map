/*
Author: Paul Kim
Date: November 28, 2023
Version: 1.0
Description: ComplexReport class for HealthMap
*/

import HealthMap from "./Map";

export default class ComplexReport {
    private _map: HealthMap
    constructor(map: HealthMap) {
        this._map = map;
    }
    printDetails() {
        console.log(this._map.getClinics())
    }
}