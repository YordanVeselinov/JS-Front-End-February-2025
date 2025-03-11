function createAddressBook(entries) {
    let addressBook = {};

    for (let entry of entries) {
        let [name, address] = entry.split(":");
        addressBook[name] = address;
    }

    let sortedNames = Object.keys(addressBook).sort();

    for (let name of sortedNames) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
}


createAddressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
]);

createAddressBook([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
]);