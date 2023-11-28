
import Queue from "./Queue";
import Person from "./Person";

export default class Clinic {
    private _name: string;
    private _staff: number;
    private _blockNum: number;
    private _queue: Queue;

    constructor(name: string, staff: number, blockNum: number, waitlist: Queue) {
        this._name = name;
        this._staff = staff;
        this._blockNum = blockNum;
        this._queue = waitlist;
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
    getPeopleInLineup(){
        return this._queue.getPeopleInQueue()
    }
    getCurrentWaitTime(){
        return this._queue.getCurrentWaitTime()
    }
}