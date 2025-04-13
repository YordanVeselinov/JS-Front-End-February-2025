function manageGuild(input) {
    let n = parseInt(input.shift(), 10);
    let guild = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let parts = line.split(' ');
        let skills = parts.pop().split(',');
        let role = parts.pop();
        let name = parts.join(' ');

        guild[name] = { role, skills };
    }

    let commandLine = input.shift();
    while (commandLine !== "End") {
        let parts = commandLine.split(' / ');
        let action = parts[0];
        let memberName = parts[1];

        if (!guild[memberName]) {
             console.log(`Error: Member ${memberName} not found.`);
             commandLine = input.shift();
             continue;
        }

        let member = guild[memberName];

        switch (action) {
            case "Perform": {
                let requiredRole = parts[2];
                let skillToPerform = parts[3];

                if (member.role === requiredRole && member.skills.includes(skillToPerform)) {
                    console.log(`${memberName} has successfully performed the skill: ${skillToPerform}!`);
                } else {
                    console.log(`${memberName} cannot perform the skill: ${skillToPerform}.`);
                }
                break;
            }
            case "Reassign": {
                let newRole = parts[2];
                member.role = newRole;
                console.log(`${memberName} has been reassigned to: ${newRole}`);
                break;
            }
            case "Learn Skill": {
                let newSkill = parts[2];
                if (member.skills.includes(newSkill)) {
                    console.log(`${memberName} already knows the skill: ${newSkill}.`);
                } else {
                    member.skills.push(newSkill);
                    console.log(`${memberName} has learned a new skill: ${newSkill}.`);
                }
                break;
            }
        }

        commandLine = input.shift();
    }

    for (let memberName in guild) {
        let memberData = guild[memberName];
        memberData.skills.sort((a, b) => a.localeCompare(b));
        let skillsString = memberData.skills.join(", ");
        console.log(`Guild Member: ${memberName}, Role: ${memberData.role}, Skills: ${skillsString}`);
    }
}

let input1 = [
    "3",
    "Arthur warrior swordsmanship,shield",
    "Merlin mage fireball,teleport",
    "Gwen healer healing,alchemy",
    "Perform / Arthur / warrior / swordsmanship",
    "Perform / Merlin / warrior / fireball",
    "Learn Skill / Gwen / purification",
    "Perform / Gwen / healer / purification",
    "Reassign / Merlin / healer",
    "Perform / Merlin / healer / teleport",
    "End"
];

console.log("--- Example 1 Output ---");
manageGuild([...input1]);
console.log("------------------------\n");

let input2 = [
    "4",
    "Lancelot knight jousting,swordplay",
    "Morgana sorceress dark_magic,illusion",
    "Robin archer archery,stealth",
    "Galahad paladin healing,swordplay",
    "Perform / Robin / archer / archery",
    "Perform / Morgana / knight / illusion",
    "Learn Skill / Lancelot / swordplay",
    "Learn Skill / Robin / tracking",
    "Learn Skill / Robin / tracking",
    "Reassign / Galahad / warrior",
    "Perform / Galahad / warrior / healing",
    "Reassign / Galahad / healer",
    "Perform / Galahad / healer / healing",
    "End"
];

console.log("--- Example 2 Output ---");
manageGuild([...input2]);
console.log("------------------------");
