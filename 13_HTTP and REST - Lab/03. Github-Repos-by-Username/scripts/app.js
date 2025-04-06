JavaScript

async function loadRepos() {
    let usernameInput = document.getElementById('username');
    let reposList = document.getElementById('repos');
    let username = usernameInput.value.trim(); 
    reposList.innerHTML = '';
	let li = document.createElement('li');

    if (!username) {
        
        li.textContent = 'Please enter a GitHub username.';
        
        return; 
    }

    let url = `https://api.github.com/users/${username}/repos`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        let data = await response.json();

        if (!Array.isArray(data)) {
             throw new Error('Unexpected response format from GitHub API.');
        }

        if (data.length === 0) {
             let li = document.createElement('li');
             li.textContent = `User '${username}' has no public repositories.`;
             reposList.appendChild(li);
             return;
        }

        data.forEach(repo => {
            let li = document.createElement('li');

            let anchor = document.createElement('a');
            anchor.href = repo.html_url;        
            anchor.textContent = repo.full_name; 
            anchor.target = '_blank';

            li.appendChild(anchor);

            reposList.appendChild(li);
        });

    } catch (error) {
        console.error('Error loading repositories:', error);

        let li = document.createElement('li');
        li.textContent = `Error: ${error.message}`;
        reposList.appendChild(li);
    }
}