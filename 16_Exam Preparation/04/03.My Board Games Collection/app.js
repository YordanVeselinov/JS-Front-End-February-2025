const BASE_URL = 'http://localhost:3030/jsonstore/games';

const endpoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
};

const nameElement = document.getElementById("g-name");
const typeElement = document.getElementById("type");
const playerslement = document.getElementById("players");

const presentsList = document.getElementById("games");
const list = document.getElementById('games-list');

const addBtn = document.getElementById("add-game");
const editBtn = document.getElementById("edit-game");
const loadBtn = document.getElementById("load-games");
const clearBtn = document.querySelector(".clear-btn");

let selectedTaskId = null;

function attachEvents() {
    loadBtn.addEventListener('click', loadBoardEventHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
    editBtn.addEventListener('click', editTaskEventHandler);
}

function getIdByname(name) {
    return fetch(BASE_URL)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].name == name)[1]._id);
}

async function loadBoardEventHandler() {
    clearAllSections();
    try {
        const res = await fetch(BASE_URL);
        const allnames = await res.json();
        Object.values(allnames).forEach((game) => {
            const container = document.createElement('div');
            container.className = 'board-game';

            const content = document.createElement('div');
            content.className = 'content';

            const nameElement = document.createElement('p');
            nameElement.textContent = game.name;

            const typeElement = document.createElement('p');
            typeElement.textContent = game.type;

            const playerslement = document.createElement('p');
            playerslement.textContent = game.players;
           

            const buttonsContainer = document.createElement('div'); 
            buttonsContainer.className = 'buttons-container';

            const changeBtn = document.createElement('button');
            changeBtn.className = 'change-btn';
            changeBtn.textContent = 'Change';

            const doneBtn = document.createElement('button');
            doneBtn.className = 'delete-btn';
            doneBtn.textContent = 'Delete';

            buttonsContainer.appendChild(changeBtn); 
            buttonsContainer.appendChild(doneBtn);

            content.appendChild(nameElement);
            content.appendChild(typeElement);
            content.appendChild(playerslement);

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
            const taskElement = event.target.closest('.board-game');
            const name = taskElement.querySelector('p').textContent;
            const type = taskElement.querySelector('p:nth-child(2)').textContent;
            const players = taskElement.querySelector('p:nth-child(3)').textContent;
            editTask(name, type, players);
            enableEditBtn();
        });
    });
    

    doneButtons.forEach((doneButton) => {
        doneButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.board-game');
            const name = taskElement.querySelector('p').textContent;
            deleteTask(name);
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
    if (nameElement.value !== '' && playerslement.value !== '' && typeElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                name: nameElement.value,
                type: typeElement.value,
                players: playerslement.value,
            }),
        };

        fetch(BASE_URL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

async function editTask(name, type, players) {
    selectedTaskId = await getIdByname(name);
    nameElement.value = name;
    typeElement.value = type;
    playerslement.value = players;
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const data = {
        name: nameElement.value,
        type: typeElement.value,
        players: playerslement.value,
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
    getIdByname(taskLoacation)
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
    nameElement.value = '';
    playerslement.value = '';
    typeElement.value = '';
}

attachEvents();
