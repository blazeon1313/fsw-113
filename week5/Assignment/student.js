// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class Student {

    constructor(...arg) {
        this.studentName = arg[0],
        this.className = arg[1],
        this.studentScores = arg[2],
        this.possibleScores = arg[3]
    }

    getStName() {
        return this.studentName;
    }

    getClName() {
        return this.className;
    }

// The class should also contain the following methods:
// - a method that adds up all the student's scores

    totStScore() {
        return this.studentScores.reduce((sum, curr) => sum + curr);
    }
    

// - a method that adds up all the possible scores

    totPossible() {
        return this.possibleScores.reduce((sum, curr) => sum + curr);
    }

// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
    getGrade() {
        return this.totStScore() / this.totPossible() * 100;
    }

    getLtrGrade() {
        if (this.getGrade() >= 90) return "A";
        if (this.getGrade() >= 80) return "B";
        if (this.getGrade() >= 70) return "C";
        if (this.getGrade() >= 60) return "D";
        return "F";
    }
}