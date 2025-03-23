function solve() {
   let searchField = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');

   let searchTerm = searchField.value.toLowerCase().trim();
   searchField.value = '';

   for (let row of tableRows) {
      row.classList.remove('select');
   }

   if (!searchTerm) return;

   for (let row of tableRows) {
      let cells = row.children;
      let hasMatch = false;
      
      for (let cell of cells) {
         if (cell.textContent.toLowerCase().includes(searchTerm)) {
            hasMatch = true;
            break;
         }
      }

      if (hasMatch) {
         row.classList.add('select');
      }
   }
}
