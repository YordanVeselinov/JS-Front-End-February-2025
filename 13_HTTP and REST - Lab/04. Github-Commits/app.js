async function loadCommits() {
    let usernameInput = document.getElementById('username');
    let repoInput = document.getElementById('repo');
    let commitsList = document.getElementById('commits');

    let username = usernameInput.value.trim();
    let repo = repoInput.value.trim();

    commitsList.innerHTML = '';

    if (!username || !repo) {
        let li = document.createElement('li');
        li.textContent = 'Please enter both username and repository name.';
        commitsList.appendChild(li);
        return;
    }

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            let error = new Error(`Error: ${response.status} (Not Found)`);
            error.status = response.status;
            throw error;
        }

        let data = await response.json();

        if (!Array.isArray(data)) {
             let error = new Error('Unexpected response format from API.');
             error.status = response.status; 
             throw error;
        }

         if (data.length === 0) {
             let li = document.createElement('li');
             li.textContent = 'No commits found for this repository.';
             commitsList.appendChild(li);
             return;
         }

        for (let commitEntry of data) {
            let li = document.createElement('li');
            let authorName = commitEntry.commit.author.name;
            let message = commitEntry.commit.message;
            li.textContent = `${authorName}: ${message}`;
            commitsList.appendChild(li);
        }

    } catch (error) {
        let li = document.createElement('li');
        let status = error.status ? error.status : 'fetching';
        li.textContent = `Error: ${status} (Not Found)`;
        commitsList.appendChild(li);
        console.error('Failed to load commits:', error);
    }
}

