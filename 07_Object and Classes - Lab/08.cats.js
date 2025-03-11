function createCats(catStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catString of catStrings) {
        let [name, age] = catString.split(" ");
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}


createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);