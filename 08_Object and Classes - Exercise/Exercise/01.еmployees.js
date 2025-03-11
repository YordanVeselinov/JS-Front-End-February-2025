function createEmployeeList(employees) {
    let employeeList = {};

    for (let employee of employees) {
        let personalNum = employee.length;
        employeeList[employee] = personalNum;
    }

    for (let [employee, personalNum] of Object.entries(employeeList)) {
        console.log(`Name: ${employee} -- Personal Number: ${personalNum}`);
    }
}


createEmployeeList([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);

createEmployeeList([
    "Samuel Jackson",
    "Will Smith",
    "Bruce Willis",
    "Tom Holland",
]);