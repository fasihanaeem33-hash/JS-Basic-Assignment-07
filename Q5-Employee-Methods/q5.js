// First Employee
let employee1 = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Khan",
    department: "Accounts",
    designation: "Accounts Manager",
    salary: 80000,

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +
            ", Department: " + this.department;
    }
};

// Second Employee
let employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Ahmed",
    department: "HR",
    designation: "HR Manager",
    salary: 70000,

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +
            ", Department: " + this.department;
    }
};

// Call methods for first employee
console.log("Employee 1 Full Name:", employee1.getFullName());

console.log("Employee 1 Information:", employee1.getEmployeeInfo());

// Call methods for second employee
console.log("Employee 2 Full Name:", employee2.getFullName());

console.log("Employee 2 Information:", employee2.getEmployeeInfo());