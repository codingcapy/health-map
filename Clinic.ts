/*
Author: Paul Kim
Date: November 28, 2023
Version: 1.0
Description: Clinic class for HealthMap
*/

import Queue from "./Queue";

export default class Clinic {
    private _region: string;
    private _name: string;
    private _staff: number;
    private _blockNum: number;
    private _queue: Queue;

    constructor(region: string, name: string, staff: number, blockNum: number, waitlist: Queue) {
        this._region = region;
        this._name = name;
        this._staff = staff;
        this._blockNum = blockNum;
        this._queue = waitlist;
    }

    getRegion() {
        return this._region;
    }

    getName() {
        return this._name
    }

    getStaff() {
        return this._staff
    }

    getBlockNum() {
        return this._blockNum;
    }

    getQueue() {
        return this._queue;
    }
    getPeopleInLineup() {
        return this._queue.getPeopleInQueue()
    }
    getCurrentWaitTime() {
        return this._queue.getCurrentWaitTime()
    }
}