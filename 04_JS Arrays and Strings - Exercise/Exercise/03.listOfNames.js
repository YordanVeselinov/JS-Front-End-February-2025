function listNames(names) {
    names.sort((a, b) => a.localeCompare(b)); 

    names.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}


listNames(["John", "Bob", "Christina", "Ema"]);
