function addItem() {

    let input = document.getElementById('newItemText');
    let newItemText = input.value;


    if (newItemText == '') {
        return;
    }

    let list = document.getElementById('items');
    let newItem = document.createElement('li');

    newItem.textContent = newItemText;

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', (e) =>{
        e.preventDefault();
        newItem.remove();
    });

    newItem.appendChild(document.createTextNode(' '));
    newItem.appendChild(deleteLink);

    list.appendChild(newItem);

    input.value = '';
}