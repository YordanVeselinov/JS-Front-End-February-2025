function manageMeetings(meetings) {
    let scheduledMeetings = {};

    for (let entry of meetings) {
        let [weekday, name] = entry.split(" ");

        if (scheduledMeetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            scheduledMeetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let [weekday, name] of Object.entries(scheduledMeetings)) {
        console.log(`${weekday} -> ${name}`);
    }
}


manageMeetings([
    "Monday Peter",
    "Wednesday Bill",
    "Monday Tim",
    "Friday Tim",
]);

manageMeetings([
    "Friday Bob",
    "Saturday Ted",
    "Monday Bill",
    "Monday John",
    "Wednesday George",
]);