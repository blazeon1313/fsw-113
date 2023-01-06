// Declare any necessary variables.

let student;

const studentName = document.querySelector("#studentName");
const className = document.querySelector("#className");
const studentScores = document.querySelector("#studentScores");
const possibleScores = document.querySelector("#possibleScores");
const certStName = document.querySelector("#certStudentName");
const certClsName = document.querySelector("#certClassName");
const certGrade = document.querySelector("#certGrade");

// Add am event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", () => {
    console.log("Print Pushed")
    instantiateStudent();
    fillCertificate(gradStudent);
});
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector('#reset').addEventListener("click", () => {
    alert("Reseting the Page!!!");
    window.location.reload();
});
// Create a function that instantiates a new student object with the input from the HTML form.
function instantiateStudent() {
    let studentScoresArr = toNumAry(studentScores.value);
    let possibleScoresArr = toNumAry(possibleScores.value);
    // changed first variable student to gradStudent
    gradStudent = new Student(studentName.value, className.value, studentScoresArr, possibleScoresArr);
    fillCertificate(gradStudent);
    // gradStudent.getStName()
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function fillCertificate(gradStudent) {
    certStName.innerText = gradStudent.getStName();
    certClsName.innerText = gradStudent.getClName();
    certGrade.innerText = gradStudent.getLtrGrade();
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function toNumAry(str) {
    return str.split(",").map(score => Number(score.trim()));
}

// psuedo code is plain english
// updating toNumAry function 
//take in a string Parameter (string of numbers seperated by commas)
// use JS to convert string to an array of numbers
// am I corectly selecting the DOM Node Text input am I getting the right string[]