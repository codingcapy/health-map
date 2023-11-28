
import * as data from "./data.json"

import HealthMap from "./Map"
import ReportMaker from "./ReportMaker"
import ComplexReport from "./ComplexReport"
import SimpleReport from "./SimpleReport"

const currentIntake = 18

async function main() {
    const map = new HealthMap(data, currentIntake)
    map.printMap();
    console.log("---End of Map---")
    map.registerForShots();
    const report = new ReportMaker(new ComplexReport(map));
    report.printDetails();
    console.log("---End of Complex Report---")
    const report2 = new ReportMaker(new SimpleReport(map));
    report2.printDetails();
    console.log("---End of Simple Report---")
    map.printMap();
    console.log("---End of Map---")
}

main();

