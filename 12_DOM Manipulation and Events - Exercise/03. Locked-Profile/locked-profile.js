document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let buttons = document.querySelectorAll('.profile button');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            let profile = e.target.parentElement;

            let lockRadio = profile.querySelector('input[type="radio"][value="on"]');
            let isLocked = profile.querySelector('input[type="radio"]:checked').id.includes('Lock');

            if (isLocked) {
                return; 
            }

            let hiddenFields = profile.querySelector('.hidden-fields');

            if (hiddenFields.classList.contains('active')) {
                e.target.textContent = 'Hide it';
                hiddenFields.classList.remove('active');
            } else {
                hiddenFields.classList.add('active');
                e.target.textContent = 'Show more';
            }
        });
    });
}