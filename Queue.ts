/*
Author: Paul Kim
Date: November 28, 2023
Version: 1.0
Description: Queue class for HealthMap
*/

import Person from "./Person";

export default class Queue {
    private items: any
    private currentWaitTime: number
    constructor() {
        this.items = [];
        this.currentWaitTime = 0
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
    getPeopleInQueue() {
        const people: string[] = []
        this.items.forEach((item: Person) => {
            const person = `${item.getFullName()} ${item.getPhn()}`
            people.push(person)
        })
        return people;
    }
    getCurrentWaitTime() {
        for (let i = 0; i < this.items.length; i++) {
            this.currentWaitTime += 15;
        }
        return this.currentWaitTime;
    }
}