function formatGrade(grade) {
    let description = '';

    if (grade < 3.00) {
        description = 'Fail';
        grade = 2;
    } else if (grade < 3.50) {
        description = 'Poor';
    } else if (grade < 4.50) {
        description = 'Good';
    } else if (grade < 5.50) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }

    console.log(`${description} (${grade == 2 ? grade : grade.toFixed(2)})`);
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
