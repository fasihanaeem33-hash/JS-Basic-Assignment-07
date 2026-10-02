let employee = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Khan",
    department: "Accounts",
    designation: "Accounts Manager",
    salary: 75000
};

// Dot notation
console.log("First Name:", employee.firstName);

console.log("Department:", employee.department);

// Bracket notation
console.log("Designation:", employee["designation"]);

console.log("Salary:", employee["salary"]);

// Add a new property
employee.email = "ali@example.com";

// Change an existing property
employee.salary = 80000;

// Remove a property
delete employee.lastName;

// Display final employee object
console.log("Final Employee Object:", employee);