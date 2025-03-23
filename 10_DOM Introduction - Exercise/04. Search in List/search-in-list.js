function solve() {
   let searchText = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');
   let matches = 0;

   for (let i = 0; i < towns.length; i++) {
      let town = towns[i];

      if (town.innerText.includes(searchText) && searchText !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}