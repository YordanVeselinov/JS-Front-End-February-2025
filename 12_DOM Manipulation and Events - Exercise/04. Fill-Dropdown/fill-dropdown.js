document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let textInput = document.getElementById('newItemText');
        let valueInput = document.getElementById('newItemValue');
        
        let text = textInput.value.trim();
        let value = valueInput.value.trim();
        
        if (!text || !value) {
            alert('Please fill in both fields');
            return;
        }
        
        let menu = document.getElementById('menu');
        
        let option = document.createElement('option');
        option.textContent = text;
        option.value = value;
        
        menu.appendChild(option);
        
        textInput.value = '';
        valueInput.value = '';
    });
}