function createPhoneBook(entries) {
    let phoneBook = {};

    for (let entry of entries) {
        let [name, number] = entry.split(" ");
        phoneBook[name] = number;
    }

    for (let [name, number] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${number}`);
    }
}

createPhoneBook([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0876566344",
]);

createPhoneBook([
    "George 0552554",
    "Peter 087587",
    "George 0453112",
    "Bill 0845344",
]);