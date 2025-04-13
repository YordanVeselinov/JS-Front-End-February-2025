function solve() {
    let BASE_URL = 'http://localhost:3030/jsonstore/reservations/';

    let loadButton = document.getElementById('load-history');
    let reservationListDiv = document.getElementById('list');
    let namesInput = document.getElementById('names');
    let daysInput = document.getElementById('days');
    let dateInput = document.getElementById('date');
    let addButton = document.getElementById('add-reservation');
    let editButton = document.getElementById('edit-reservation');

    let currentEditReservationId = null;

    loadButton.addEventListener('click', loadReservations);
    addButton.addEventListener('click', addReservation);
    editButton.addEventListener('click', confirmEditReservation);

    async function loadReservations() {
        reservationListDiv.innerHTML = '';

        try {
            let response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let reservations = await response.json();

            Object.values(reservations).forEach(res => {
                let reservationElement = createReservationElement(res);
                reservationListDiv.appendChild(reservationElement);
            });

            editButton.disabled = true;
            addButton.disabled = false;

        } catch (error) {
            console.error('Error loading reservations:', error);
        }
    }

    function createReservationElement(reservation) {
        let containerDiv = document.createElement('div');
        containerDiv.className = 'container';
        containerDiv.dataset.id = reservation._id;

        let nameH2 = document.createElement('h2');
        nameH2.textContent = reservation.names;

        let dateH3 = document.createElement('h3');
        dateH3.textContent = reservation.date;

        let daysH3 = document.createElement('h3');
        daysH3.id = 'reservation_days';
        daysH3.textContent = reservation.days;

        let buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        let changeButton = document.createElement('button');
        changeButton.className = 'change-btn';
        changeButton.textContent = 'Change';
        changeButton.addEventListener('click', () => prepareEdit(reservation, containerDiv));

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteReservation(reservation._id));

        buttonsContainer.appendChild(changeButton);
        buttonsContainer.appendChild(deleteButton);

        containerDiv.appendChild(nameH2);
        containerDiv.appendChild(dateH3);
        containerDiv.appendChild(daysH3);
        containerDiv.appendChild(buttonsContainer);

        return containerDiv;
    }

    async function addReservation(event) {
        event.preventDefault();

        let names = namesInput.value.trim();
        let days = daysInput.value.trim();
        let date = dateInput.value.trim();

        if (!names || !days || !date) {
            return;
        }

        let newReservation = {
            names: names,
            days: days,
            date: date
        };

        try {
            let response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReservation),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            namesInput.value = '';
            daysInput.value = '';
            dateInput.value = '';

            await loadReservations();

        } catch (error) {
            console.error('Error adding reservation:', error);
        }
    }

    function prepareEdit(reservation, element) {
        namesInput.value = reservation.names;
        daysInput.value = reservation.days;
        dateInput.value = reservation.date;

        currentEditReservationId = reservation._id;

        element.remove();

        addButton.disabled = true;
        editButton.disabled = false;
    }

    async function confirmEditReservation(event) {
        event.preventDefault();

        if (!currentEditReservationId) return;

        let names = namesInput.value.trim();
        let days = daysInput.value.trim();
        let date = dateInput.value.trim();

        if (!names || !days || !date) {
            return;
        }

        let updatedReservation = {
            names: names,
            days: days,
            date: date,
            _id: currentEditReservationId
        };

        try {
            let response = await fetch(BASE_URL + currentEditReservationId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedReservation),
            });

            if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
            }

             namesInput.value = '';
             daysInput.value = '';
             dateInput.value = '';

             currentEditReservationId = null;

             addButton.disabled = false;
             editButton.disabled = true;

             await loadReservations();

        } catch (error) {
            console.error('Error editing reservation:', error);
        }
    }

    async function deleteReservation(id) {
         try {
             let response = await fetch(BASE_URL + id, {
                 method: 'DELETE',
             });

             if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
             }

              await loadReservations();

         } catch (error) {
             console.error('Error deleting reservation:', error);
         }
    }
}

solve();
