function attachEvents() {
    let phonebookUl = document.getElementById('phonebook');
    let loadButton = document.getElementById('btnLoad');
    let createButton = document.getElementById('btnCreate');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadButton.addEventListener('click', loadPhonebookHandler);
    createButton.addEventListener('click', createEntryHandler);

    async function loadPhonebookHandler() {
        phonebookUl.innerHTML = ''; 
        try {
            let response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let entries = await response.json();
             let entriesArray = Object.values(entries); 

            entriesArray.forEach(entry => {
                if (entry.person && entry.phone && entry._id) { 
                    let li = document.createElement('li');
                    
                    let textNode = document.createTextNode(`${entry.person}: ${entry.phone}`);
                    li.appendChild(textNode); 

                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', () => deleteEntryHandler(entry._id)); 
                    
                    li.appendChild(deleteButton); 
                    phonebookUl.appendChild(li);
                }
            });

        } catch (error) {
            console.error("Error loading phonebook:", error);
        }
    }

    async function createEntryHandler() {
        let personValue = personInput.value.trim();
        let phoneValue = phoneInput.value.trim();

        if (!personValue || !phoneValue) {
            console.log("Person and Phone fields cannot be empty.");
            return;
        }

        let newEntry = {
            person: personValue,
            phone: phoneValue
        };

        try {
            let response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEntry)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            personInput.value = '';
            phoneInput.value = '';

            await loadPhonebookHandler(); 

        } catch (error) {
            console.error("Error creating entry:", error);
        }
    }

    async function deleteEntryHandler(entryId) {
        let deleteUrl = `${baseUrl}/${entryId}`;
        
        try {
            let response = await fetch(deleteUrl, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            await loadPhonebookHandler(); 

        } catch (error) {
            console.error("Error deleting entry:", error);
        }
    }
}

attachEvents();