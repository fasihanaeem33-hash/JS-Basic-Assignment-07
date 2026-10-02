let students = [
    "Ali",
    "Sara",
    "Ahmed",
    "Ayesha",
    "Hamza",
    "Sara",
    "Bilal"
];

// Check whether Ayesha is present
let isAyeshaPresent = students.includes("Ayesha");

// Position of first Sara
let firstSaraPosition = students.indexOf("Sara");

// Position of last Sara
let lastSaraPosition = students.lastIndexOf("Sara");

// Find first student whose name starts with A
let firstStudentWithA = students.find(function (student) {
    return student.startsWith("A");
});

// Find position of first student whose name starts with A
let firstStudentWithAPosition = students.findIndex(function (student) {
    return student.startsWith("A");
});

// Find last student whose name starts with A
let lastStudentWithA = students.findLast(function (student) {
    return student.startsWith("A");
});

// Find position of last student whose name starts with A
let lastStudentWithAPosition = students.findLastIndex(function (student) {
    return student.startsWith("A");
});

console.log("Is Ayesha present?", isAyeshaPresent);

console.log("First Sara position:", firstSaraPosition);

console.log("Last Sara position:", lastSaraPosition);

console.log("First student whose name starts with A:", firstStudentWithA);

console.log("Position of first student starting with A:", firstStudentWithAPosition);

console.log("Last student whose name starts with A:", lastStudentWithA);

console.log("Position of last student starting with A:", lastStudentWithAPosition);