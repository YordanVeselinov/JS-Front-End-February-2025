function solve() {
    let checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    let rows = document.querySelectorAll('tbody tr');
    let output = document.getElementById('output');

    let result = [];

    let checkedCols = Array.from(checkboxes)
        .map((checkbox, index) => ({
            checked: checkbox.checked,
            name: checkbox.parentElement.textContent.trim().toLowerCase(),
            index: index
        }))
        .filter(col => col.checked);
    for (let row of rows) {
        let cells = row.querySelectorAll('td');
        let rowData = {};

        for (let col of checkedCols) {
            rowData[col.name] = cells[col.index].textContent.trim();
        }

        result.push(rowData);
    }
    output.textContent = JSON.stringify(result);
}
