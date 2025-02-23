function solve(month){
    let months = {
        1: "January",
        2: "February",
        3: "March", 
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    if (month > 12 || month < 1) {
        console.log("Error!");
    } else {
        console.log(months[month]);
    }
}

// function solveWithIfElse(month) {
//     if (month === 1) {
//         console.log("January");
//     } else if (month === 2) {
//         console.log("February");
//     } else if (month === 3) {
//         console.log("March");
//     } else if (month === 4) {
//         console.log("April");
//     } else if (month === 5) {
//         console.log("May");
//     } else if (month === 6) {
//         console.log("June");
//     } else if (month === 7) {
//         console.log("July");
//     } else if (month === 8) {
//         console.log("August");
//     } else if (month === 9) {
//         console.log("September");
//     } else if (month === 10) {
//         console.log("October");
//     } else if (month === 11) {
//         console.log("November");
//     } else if (month === 12) {
//         console.log("December");
//     } else {
//         console.log("Error!");
//     }
// }

solve(1);
solve(2);
solve(3);
solve(4);
solve(5);
solve(6);
solve(7);
solve(8);
solve(9);
solve(10);
solve(11);
solve(12);
solve(13);

