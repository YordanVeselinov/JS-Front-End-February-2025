document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let form = document.getElementById('solutionCheck');
    let checkParagraph = document.getElementById('check');
    let table = document.querySelector('table');
    let clearBtn = document.querySelector('input[type="reset"]');
    let sizeSelect = document.getElementById('size');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        checkSudokuSolution();
    });
    
    clearBtn.addEventListener('click', function() {
        clearBoard();
    });
    
    sizeSelect.addEventListener('change', function() {
        createBoard(parseInt(this.value));
    });
    
    function checkSudokuSolution() {
        let size = parseInt(sizeSelect.value);
        let inputs = Array.from(document.querySelectorAll('input[type="number"]'));
        let values = inputs.map(input => parseInt(input.value));
        
        if (values.some(isNaN)) {
        setResult(false, "Please fill all cells");
        return;
        }
    
        let isValid = validateSudoku(values, size);
        setResult(isValid, isValid ? "Success!" : "Keep trying ...");
    }
    
    function validateSudoku(values, size) {
        let grid = [];
        for (let i = 0; i < size; i++) {
        grid.push(values.slice(i * size, (i + 1) * size));
        }
    
        for (let row = 0; row < size; row++) {
        let unique = new Set(grid[row]);
        if (unique.size !== size) return false;
        }
    
        for (let col = 0; col < size; col++) {
        let column = grid.map(row => row[col]);
        let unique = new Set(column);
        if (unique.size !== size) return false;
        }
    
        if (size === 9) {
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
            let subgrid = [];
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                subgrid.push(grid[boxRow * 3 + row][boxCol * 3 + col]);
                }
            }
            let unique = new Set(subgrid);
            if (unique.size !== 9) return false;
            }
        }
        }
    
        return true;
    }
    
    function setResult(isValid, message) {
        table.style.border = isValid ? "2px solid green" : "2px solid red";
        checkParagraph.textContent = message;
    }
    
    function clearBoard() {
        document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = '';
        });
        table.style.border = "";
        checkParagraph.textContent = "";
    }
    
    function createBoard(size) {
        let tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
    
        for (let i = 0; i < size; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'number';
            input.step = '1';
            input.min = '1';
            input.max = size.toString();
            input.required = true;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
        }
    }
    
    createBoard(3);
    createBoard(3);
}
