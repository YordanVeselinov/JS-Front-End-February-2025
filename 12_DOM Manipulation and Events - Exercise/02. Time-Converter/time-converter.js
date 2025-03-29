document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // Conversion factors (days is the base unit)
    let conversionFactors = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    // Get all form elements and their inputs
    const forms = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    // Add submit event listeners to all forms
    Object.keys(forms).forEach(unit => {
        forms[unit].addEventListener('submit', function (e) {
            e.preventDefault();
            convertTime(unit);
        });
    });

    function convertTime(fromUnit) {
        let inputField = document.getElementById(`${fromUnit}-input`);
        let value = parseFloat(inputField.value);

        if (isNaN(value)) {
            alert('Please enter a valid number');
            return;
        }

        let days = value / conversionFactors[fromUnit];

        Object.keys(conversionFactors).forEach(unit => {
            if (unit !== fromUnit) {
                let convertedValue = days * conversionFactors[unit];
                document.getElementById(`${unit}-input`).value = convertedValue.toFixed(2);
            }
        });
    }
}