
import Queue from "./Queue";
import Person from "./Person";

export default class Clinic{
    private _name:string;
    private _staff:number;
    private _blockNum:number;
    private _queue:Queue;

    constructor(name:string,staff:number,blockNum:number, waitlist:Queue){
        this._name = name;
        this._staff = staff;
        this._blockNum = blockNum;
        this._queue = new Queue();
    }

    getBlockNum(){
        return this._blockNum;
    }

    getQueue(){
        return this._queue;
    }
}