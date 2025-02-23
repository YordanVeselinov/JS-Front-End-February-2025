function solve(dayType, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    if (dayType === "Weekday") {
        if (age >= 0 && age <= 18) {
            console.log("12$");
        } else if (age > 18 && age <= 64) {
            console.log("18$");
        } else {
            console.log("12$");
        }
    } else if (dayType === "Weekend") {
        if (age >= 0 && age <= 18) {
            console.log("15$");
        } else if (age > 18 && age <= 64) {
            console.log("20$");
        } else {
            console.log("15$");
        }
    } else if (dayType === "Holiday") {
        if (age >= 0 && age <= 18) {
            console.log("5$");
        } else if (age > 18 && age <= 64) {
            console.log("12$");
        } else {
            console.log("10$");
        }
    }
}
solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);
