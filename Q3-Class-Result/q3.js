let marks = [78, 45, 92, 66, 88, 54, 91, 73];

// Second group of marks
let secondGroup = [81, 69, 95, 60];

// Combine both groups
let combinedMarks = marks.concat(secondGroup);

console.log("Combined marks:", combinedMarks);

// Create a smaller list from selected portion
let selectedMarks = combinedMarks.slice(2, 7);

console.log("Selected marks:", selectedMarks);

// Change one mark in the middle
combinedMarks.splice(5, 1, 70);

console.log("After changing one mark:", combinedMarks);

// Total number of marks
console.log("Total number of marks:", combinedMarks.length);

// Arrange marks from lowest to highest
let sortedMarks = [...combinedMarks];

sortedMarks.sort(function (a, b) {
    return a - b;
});

console.log("Marks from lowest to highest:", sortedMarks);

// Reverse the sorted list
let reversedMarks = [...sortedMarks];

reversedMarks.reverse();

console.log("Marks from highest to lowest:", reversedMarks);

// Arrow function
let displayFinalResult = (marksArray) => {
    console.log("Final Result:", marksArray);
};

// Call arrow function
displayFinalResult(reversedMarks);