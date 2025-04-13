const BASE_URL = 'http://localhost:3030/jsonstore/matches';

const endpoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
};

const hostElement = document.getElementById("host");
const guestElement = document.getElementById("guest");
const scoreElement = document.getElementById("score");

const matchesList = document.getElementById("matches");
const list = document.getElementById('list');

const addBtn = document.getElementById("add-match");
const editBtn = document.getElementById("edit-match");
const loadBtn = document.getElementById("load-matches");

let selectedTaskId = null;

function attachEvents() {
    loadBtn.addEventListener('click', loadBoardEventHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
    editBtn.addEventListener('click', editTaskEventHandler);
}

function getElementByHost(host) {
    return fetch(BASE_URL)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].host == host)[1]._id);
}

async function loadBoardEventHandler() {
    clearAllSections();
    try {
        const res = await fetch(BASE_URL);
        const allMatches = await res.json();
        Object.values(allMatches).forEach((host) => {
            const container = document.createElement('li');
            container.className = 'match';

            const content = document.createElement('div');
            content.className = 'info';

            const hostElement = document.createElement('p');
            hostElement.textContent = host.host;

            const guestElement = document.createElement('p');
            guestElement.textContent = host.guest;

            const scoreElement = document.createElement('p');
            scoreElement.textContent = host.score;
           

            const buttonsContainer = document.createElement('div'); 
            buttonsContainer.className = 'btn-wrapper';

            const changeBtn = document.createElement('button');
            changeBtn.className = 'change-btn';
            changeBtn.textContent = 'Change';

            const doneBtn = document.createElement('button');
            doneBtn.className = 'delete-btn';
            doneBtn.textContent = 'Delete';

            buttonsContainer.appendChild(changeBtn); 
            buttonsContainer.appendChild(doneBtn);

            content.appendChild(hostElement);
            content.appendChild(scoreElement);
            content.appendChild(guestElement);
            

            container.appendChild(content);
            container.appendChild(buttonsContainer); 

            list.appendChild(container);
        });
        attachEventListeners();
    } catch (err) {
        console.error(err);
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const doneButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach((changeButton) => {
        changeButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.match');
            const host = taskElement.querySelector('p').textContent;
            const score = taskElement.querySelector('p:nth-child(2)').textContent;
            const guest = taskElement.querySelector('p:nth-child(3)').textContent;
            editTask(host, guest, score);
            enableEditBtn();
        });
    });
    

    doneButtons.forEach((doneButton) => {
        doneButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.match');
            const host = taskElement.querySelector('p').textContent;
            deleteTask(host);
        });
    });
    
}

function enableEditBtn() {
    addBtn.disabled = true;
    editBtn.disabled = false;
}

function enableAddBtn() {
    addBtn.disabled = false;
    editBtn.disabled = true;
}

function createTaskEventHandler(ev) {
    ev.preventDefault();
    if (hostElement.value !== '' && scoreElement.value !== '' && guestElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                host: hostElement.value,
                score: scoreElement.value,
                guest: guestElement.value,
            }),
        };

        fetch(BASE_URL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

async function editTask(host, guest, score) {
    selectedTaskId = await getElementByHost(host);
    hostElement.value = host;
    guestElement.value = guest;
    scoreElement.value = score;
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const data = {
        host: hostElement.value,
        score: scoreElement.value,
        guest: guestElement.value,
        _id: selectedTaskId,
    };

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function deleteTask(taskLoacation) {
    getElementByHost(taskLoacation)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        )
        .then(() => {
            clearAllSections();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function clearAllSections() {
    list.innerHTML = '';
}

function clearAllInputs() {
    hostElement.value = '';
    scoreElement.value = '';
    guestElement.value = '';
}

attachEvents();
