function solve() {
    let selectMenuTo = document.getElementById('selectMenuTo');
    let input = Number(document.getElementById('input').value);
    let output = document.getElementById('result');


    if (selectMenuTo.value === 'binary') {
        output.value = Number(input).toString(2);
    } else if (selectMenuTo.value === 'hexadecimal') {
        output.value = Number(input).toString(16).toUpperCase();
    }

}
