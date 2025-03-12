function manageCourses(commands) {
    let courses = {};

    for (let command of commands) {
        if (command.includes(": ")) {
            let [courseName, capacity] = command.split(": ");
            if (!courses[courseName]) {
                courses[courseName] = { capacity: Number(capacity), students: [] };
            } else {
                courses[courseName].capacity += Number(capacity);
            }
        } else if (command.includes(" joins ")) {
            let [userInfo, courseName] = command.split(" joins ");
            let [username, credits] = userInfo.split("[");
            credits = Number(credits.split("]")[0]);
            let email = userInfo.split(" with email ")[1];

            if (courses[courseName] && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, email, credits });
            }
        }
    }

    let sortedCourses = Object.entries(courses).sort(
        (a, b) => b[1].students.length - a[1].students.length
    );

    for (let [courseName, data] of sortedCourses) {
        let placesLeft = data.capacity - data.students.length;
        console.log(`${courseName}: ${placesLeft} places left`);
        data.students
            .sort((a, b) => b.credits - a.credits)
            .forEach((student) => {
                console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
            });
    }
}

// Example Usage
manageCourses([
    "JavaBasics: 2",
    "user1[25] with email user1@user.com joins C#Basics",
    "C#Advanced: 3",
    "JSCore: 4",
    "user2[30] with email user2@user.com joins C#Basics",
    "user13[50] with email user13@user.com joins JSCore",
    "user1[25] with email user1@user.com joins JSCore",
    "user8[18] with email user8@user.com joins C#Advanced",
    "user6[85] with email user6@user.com joins JSCore",
    "JSCore: 2",
    "user11[3] with email user11@user.com joins JavaBasics",
    "user45[105] with email user45@user.com joins JSCore",
    "user007[20] with email user007@user.com joins JSCore",
    "user700[29] with email user700@user.com joins JSCore",
    "user900[88] with email user900@user.com joins JSCore",
]);

manageCourses([
    "JavaBasics: 15",
    "user1[26] with email user1@user.com joins JavaBasics",
    "user2[36] with email user11@user.com joins JavaBasics",
    "JavaBasics: 5",
    "C#Advanced: 5",
    "user1[26] with email user1@user.com joins C#Advanced",
    "user2[36] with email user11@user.com joins C#Advanced",
    "user3[6] with email user3@user.com joins C#Advanced",
    "C#Advanced: 1",
    "JSCore: 8",
    "user23[62] with email user23@user.com joins JSCore",
]);