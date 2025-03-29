document.addEventListener('DOMContentLoaded', solve);

function solve() {

   let contentDiv = document.getElementById('content');

   let button = document.querySelector('[type="submit"]');

   button.addEventListener('click', addText);


   function addText(e) {
      e.preventDefault();
      let input = document.querySelector('input[type="text"]').value;

      let strings = input.split(',').map(str => str.trim());

      contentDiv.innerHTML = '';

      createDivs(strings);
   }


   function createDivs(strings) {
      strings.forEach(text => {
         let div = document.createElement('div');

         let p = document.createElement('p');
         p.textContent = text;

         div.appendChild(p);

         contentDiv.appendChild(div);
      });
   }
   
}