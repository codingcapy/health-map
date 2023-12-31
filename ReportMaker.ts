/*
Author: Paul Kim
Date: November 28, 2023
Version: 1.0
Description: ReportMaker class for HealthMap
*/

interface IReport {
    printDetails(): void;
}

export default class ReportMaker {
    private report: IReport
    constructor(report: IReport) {
        this.report = report;
    }
    printDetails() {
        this.report.printDetails();
    }
}