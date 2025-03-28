function addItem() {
    let input = document.getElementById('newItemText');
    let button = document.querySelector('input[type="button"]');

    if (input.value == '') {
        return;
    }

    let list = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);

    input.value = '';
}
