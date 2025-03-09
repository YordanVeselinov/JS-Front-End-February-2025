function validatePassword(password) {
    let errors = [];
    
    if (password.length < 6 || password.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
    }
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        errors.push("Password must consist only of letters and digits");
    }
    if ((password.match(/\d/g) || []).length < 2) {
        errors.push("Password must have at least 2 digits");
    }
    
    if (errors.length === 0) {
        console.log("Password is valid");
    } else {
        console.log(errors.join("\n"));
    }
}


validatePassword("logIn");
validatePassword("MyPass123");
validatePassword("Pa$s$s");
