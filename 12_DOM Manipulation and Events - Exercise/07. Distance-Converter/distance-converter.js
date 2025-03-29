document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let convertBtn = document.getElementById('convert');
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    let conversionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener('click', function() {
        let inputValue = parseFloat(inputDistance.value);
        if (isNaN(inputValue)) {
            alert('Please enter a valid number');
            return;
        }

        let fromUnit = inputUnits.value;
        let toUnit = outputUnits.value;

        const meters = inputValue * conversionRates[fromUnit];

        const result = meters / conversionRates[toUnit];

        outputDistance.value = result % 1 === 0 ? result.toString() : result.toFixed(6);
    });
}