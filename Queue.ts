
import Person from "./Person";

export default class Queue {
    private items: any
    constructor() {
        this.items = [];
    }
    enqueue(element: any) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.join(' '));
    }
}