/*
Author: Paul Kim
Date: November 28, 2023
Version: 1.0
Description: ReportMaker class for HealthMap
*/

interface IReport {
    printDetails(): any
}

export default class ReportMaker {
    private report: IReport
    constructor(report: any) {
        this.report = report;
    }
    printDetails() {
        this.report.printDetails();
    }
}