document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let generateForm = document.getElementById('input');
    let buyForm = document.getElementById('shop');
    let tableBody = document.querySelector('#shop table tbody');
    let resultTextarea = buyForm.querySelector('textarea');

    // Generate furniture items from JSON
    generateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear existing rows (except the sample row)
        let rows = tableBody.querySelectorAll('tr');
        for (let i = 1; i < rows.length; i++) {
            tableBody.removeChild(rows[i]);
        }

        // Parse the JSON input
        try {
            let furnitureArray = JSON.parse(this.querySelector('textarea').value);
            
            // Create a row for each furniture item
            furnitureArray.forEach(item => {
                let row = document.createElement('tr');
                
                // Image cell
                let imgCell = document.createElement('td');
                let img = document.createElement('img');
                img.src = item.img;
                imgCell.appendChild(img);
                
                // Name cell
                let nameCell = document.createElement('td');
                let namePara = document.createElement('p');
                namePara.textContent = item.name;
                nameCell.appendChild(namePara);
                
                // Price cell
                let priceCell = document.createElement('td');
                let pricePara = document.createElement('p');
                pricePara.textContent = item.price;
                priceCell.appendChild(pricePara);
                
                // Decoration factor cell
                let decCell = document.createElement('td');
                let decPara = document.createElement('p');
                decPara.textContent = item.decFactor;
                decCell.appendChild(decPara);
                
                // Checkbox cell
                let checkCell = document.createElement('td');
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkCell.appendChild(checkbox);
                
                // Append all cells to the row
                row.appendChild(imgCell);
                row.appendChild(nameCell);
                row.appendChild(priceCell);
                row.appendChild(decCell);
                row.appendChild(checkCell);
                
                // Add row to table
                tableBody.appendChild(row);
            });
        } catch (error) {
            alert('Invalid JSON input');
            console.error(error);
        }
    });

    // Handle purchase
    buyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let checkedItems = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        let checkedCount = 0;
        
        // Get all rows (skip the first sample row)
        let rows = tableBody.querySelectorAll('tr');
        for (let i = 1; i < rows.length; i++) {
            let row = rows[i];
            let checkbox = row.querySelector('input[type="checkbox"]');
            
            if (checkbox && checkbox.checked) {
                let name = row.querySelector('td:nth-child(2) p').textContent;
                let price = parseFloat(row.querySelector('td:nth-child(3) p').textContent);
                let decFactor = parseFloat(row.querySelector('td:nth-child(4) p').textContent);
                
                checkedItems.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
                checkedCount++;
            }
        }
        
        // Prepare the result text
        let resultText = '';
        if (checkedItems.length > 0) {
            resultText = `Bought furniture: ${checkedItems.join(', ')}\n`;
            resultText += `Total price: ${totalPrice}\n`;
            resultText += `Average decoration factor: ${(totalDecFactor / checkedCount)}`;
        } else {
            resultText = 'No items selected for purchase';
        }
        
        // Display the result
        resultTextarea.value = resultText;
        resultTextarea.value = resultText;
    });
}