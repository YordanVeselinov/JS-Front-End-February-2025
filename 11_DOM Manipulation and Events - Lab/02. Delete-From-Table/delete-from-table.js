function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value;
    let resultDiv = document.getElementById('result');
    let emailCells = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));

    let rowToDelete = emailCells.find(cell => cell.textContent === email)?.parentNode;

    if (rowToDelete) {
        rowToDelete.parentNode.removeChild(rowToDelete);
        resultDiv.textContent = 'Deleted.';
      } else {
        resultDiv.textContent = 'Not found.';
      }
    
}
