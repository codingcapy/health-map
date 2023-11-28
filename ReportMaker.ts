
interface IReport{
    
    printDetails():any
}

export default class ReportMaker {
    private report:IReport
    constructor(report: any) {
        this.report = report;
    }
    printDetails() {
        this.report.printDetails();
    }
}