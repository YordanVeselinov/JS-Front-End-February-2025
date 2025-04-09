async function lockedProfile() {
    let mainElement = document.getElementById('main');
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';

    mainElement.innerHTML = ''; 
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let profilesData = await response.json(); 
        let profilesArray = Array.isArray(profilesData) ? profilesData : Object.values(profilesData);


        profilesArray.forEach((profile, index) => {
            let profileCard = createProfileCard(profile, index + 1); 
            mainElement.appendChild(profileCard);
        });

    } catch (error) {
        console.error("Error loading profiles:", error);
        mainElement.textContent = `Error loading profiles: ${error.message}`; // Display error
    }
}

function createProfileCard(profile, userIndex) {
    let profileDiv = document.createElement('div');
    profileDiv.className = 'profile';


    let img = document.createElement('img');
    img.src = './iconProfile2.png';
    img.className = 'userIcon';
    profileDiv.appendChild(img);

    let lockLabel = document.createElement('label');
    lockLabel.textContent = 'Lock';
    profileDiv.appendChild(lockLabel);
    let lockRadio = document.createElement('input');
    lockRadio.type = 'radio';
    lockRadio.name = `user${userIndex}Locked`; 
    lockRadio.value = 'lock';
    lockRadio.checked = true;
    profileDiv.appendChild(lockRadio);

    let unlockLabel = document.createElement('label');
    unlockLabel.textContent = 'Unlock';
    profileDiv.appendChild(unlockLabel);
    let unlockRadio = document.createElement('input');
    unlockRadio.type = 'radio';
    unlockRadio.name = `user${userIndex}Locked`; 
    unlockRadio.value = 'unlock';
    profileDiv.appendChild(unlockRadio);

    profileDiv.appendChild(document.createElement('hr'));

    let usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    profileDiv.appendChild(usernameLabel);
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = `user${userIndex}Username`; 
    usernameInput.value = profile.username || '';
    usernameInput.disabled = true;
    usernameInput.readOnly = true;
    profileDiv.appendChild(usernameInput);

    let hiddenFieldsDiv = document.createElement('div');
    hiddenFieldsDiv.className = `user${userIndex}Username`; 
    hiddenFieldsDiv.style.display = 'none'; 

    hiddenFieldsDiv.appendChild(document.createElement('hr'));

    let emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    hiddenFieldsDiv.appendChild(emailLabel);
    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = `user${userIndex}Email`; 
    emailInput.value = profile.email || '';
    emailInput.disabled = true;
    emailInput.readOnly = true;
    hiddenFieldsDiv.appendChild(emailInput);

    let ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';
    hiddenFieldsDiv.appendChild(ageLabel);
    let ageInput = document.createElement('input');
    ageInput.type = 'number'; 
    ageInput.name = `user${userIndex}Age`; 
    ageInput.value = profile.age !== undefined ? profile.age : ''; 
    ageInput.disabled = true;
    ageInput.readOnly = true;
    hiddenFieldsDiv.appendChild(ageInput);

    profileDiv.appendChild(hiddenFieldsDiv); 

    let button = document.createElement('button');
    button.textContent = 'Show more';
    button.addEventListener('click', toggleDetailsHandler);
    profileDiv.appendChild(button);

    return profileDiv;
}

function toggleDetailsHandler(event) {
    let button = event.target;
    let profileDiv = button.parentElement;
    let unlockRadio = profileDiv.querySelector('input[type="radio"][value="unlock"]');

    if (unlockRadio && unlockRadio.checked) {
        
        
        let hiddenDiv = button.previousElementSibling; 

       
        if (hiddenDiv) {
             if (button.textContent === 'Show more') {
                 hiddenDiv.style.display = 'block';
                 button.textContent = 'Hide it';
             } else {
                 hiddenDiv.style.display = 'none';
                 button.textContent = 'Show more';
             }
        } else {
             console.error("Could not find the hidden details div.");
        }
    }
}
