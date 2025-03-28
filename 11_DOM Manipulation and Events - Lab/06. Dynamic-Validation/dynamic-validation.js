document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let emailInput = document.querySelector('input');

    console.log(emailInput);


    emailInput.addEventListener('change', function (e) {
        let email = e.target.value;

        let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (emailRegex.test(email)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    });

}