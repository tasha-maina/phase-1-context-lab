function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}
const employee = createEmployeeRecord(["Gray", "Worm", "Security", 10]);

createTimeInEvent.call(employee, "2025-07-16 0800");

//console.log(employee);




 //We're giving you this function. Take a look at it, you might see some usage
 //that's new and different. That's because we're avoiding a well-known, but
 //sneaky bug that we'll cover in the next few lessons!

 //As a result, the lessons for this function will pass *and* it will be available
 //for you to use if you need it!
 //*/

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}
createTimeOutEvent.call(employee, "2025-07-16 1600");
//console.log(employee);
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}
const hours = hoursWorkedOnDate.call(employee, "2025-07-16");
//console.log(`Hours worked on 2025-07-16:`, hours);
function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}
const wages = wagesEarnedOnDate.call(employee, "2025-07-16");
//console.log(`Wages earned on 2025-07-16: $${wages}`);
const totalWages = allWagesFor.call(employee);
//console.log(`Total wages for Gray Worm: $${totalWages}`);
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}
const employees = createEmployeeRecords([
    ["Gray", "Worm", "Security", 10],
    ["Daenerys", "Targaryen", "CEO", 100]
]);

const found = findEmployeeByFirstName(employees, "Daenerys");
//console.log(found);
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, emp) => {
        return total + allWagesFor.call(emp);
    }, 0);
}
// Recreate employees
const staff = createEmployeeRecords([
    ["Gray", "Worm", "Security", 10],
    ["Daenerys", "Targaryen", "CEO", 100]
]);

// Add time events
createTimeInEvent.call(staff[0], "2025-07-16 0800");
createTimeOutEvent.call(staff[0], "2025-07-16 1600");

createTimeInEvent.call(staff[1], "2025-07-16 1000");
createTimeOutEvent.call(staff[1], "2025-07-16 1800");

// Calculate payroll
const totalPayroll = calculatePayroll(staff);
console.log(`Total payroll for all employees: $${totalPayroll}`);







