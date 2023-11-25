
import * as data from "./data.json"

import HealthMap from "./Map"
import ReportMaker from "./ReportMaker"
import ComplexReport from "./ComplexReport"

const currentIntake = 18

async function main() {
    const map = new HealthMap(data, currentIntake)
    map.printMap();
    console.log("---End of Map---")
    map.registerForShots();
    const report = new ReportMaker(new ComplexReport(map));
    report.printDetails();
    console.log("---End of Report---")
    map.printMap();
    console.log("---End of Map---")
}

main();

