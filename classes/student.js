class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate = function() {
        this.tardies += 1;
        if (this.tardies === 1) {
            return `${this.firstName} has been late ${this.tardies} time`;
        } else if (this.tardies >= 3) {
            return `${this.firstName} is being expelled!`;
        }
        return `${this.firstName} has been late ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage = function() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum/this.scores.length;
    }

    static EnrollStudents() {
        return 'Enrolling Students!';
    }
}

let firstStudent = new Student('Emil', 'Kata', 3);
let secondStudent = new Student('Colt', 'Python', 8);
console.log(firstStudent.firstName);
console.log(secondStudent.grade);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
firstStudent.addScore(98);
firstStudent.addScore(100);
firstStudent.addScore(76);
console.log(firstStudent.calculateAverage());
console.log(Student.EnrollStudents());