function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age: Number(age),
    };
}


console.log(createPerson("Peter", "Pan", "20"));
console.log(createPerson("George", "Smith", "18"));