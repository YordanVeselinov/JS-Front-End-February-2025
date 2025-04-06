async function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   let resultDiv = document.getElementById('res');

   try {
       let response = await fetch(url);

       if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
       }

       let data = await response.text();

       resultDiv.textContent = data;

   } catch (error) {
       console.error('Error fetching repositories:', error);
       resultDiv.textContent = `Error loading repositories: ${error.message}`;
   }
}
