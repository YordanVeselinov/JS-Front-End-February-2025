function createSchoolRegister(students) {
    let register = {};

    for (let student of students) {
        let [name, grade, score] = student
            .split(", ")
            .map((part) => part.split(": ")[1]);
        grade = Number(grade);
        score = Number(score);

        if (score >= 3) {
            let nextGrade = grade + 1;
            if (!register[nextGrade]) {
                register[nextGrade] = { students: [], scores: [] };
            }
            register[nextGrade].students.push(name);
            register[nextGrade].scores.push(score);
        }
    }

    let sortedGrades = Object.keys(register).sort((a, b) => a - b);

    for (let grade of sortedGrades) {
        let studentsList = register[grade].students.join(", ");
        let averageScore = (
            register[grade].scores.reduce((a, b) => a + b, 0) /
            register[grade].scores.length
        ).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentsList}`);
        console.log(
            `Average annual score from last year: ${averageScore}`
        );
        console.log();
    }
}

// Example Usage
createSchoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

createSchoolRegister([
    "Student name: George, Grade: 5, Graduated with an average score: 2.75",
    "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
    "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
    "Student name: John, Grade: 9, Graduated with an average score: 2.90",
    "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
    "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);