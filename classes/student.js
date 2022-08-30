class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student('Emil', 'Kata', 3);
let secondStudent = new Student('Colt', 'Python', 8);
console.log(firstStudent.firstName);
console.log(secondStudent.grade);