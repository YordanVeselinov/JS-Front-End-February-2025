function attachEvents() {
    let tableBody = document.querySelector('#results tbody');
    let studentForm = document.getElementById('form');
    let notificationP = document.querySelector('.notification'); 

    let baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    studentForm.addEventListener('submit', submitStudentHandler);

    loadStudents();

    async function loadStudents() {
        tableBody.innerHTML = '';
        if (notificationP) notificationP.textContent = '';

        try {
            let response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error loading students! status: ${response.status}`);
            }
            let studentsData = await response.json();

            
            let studentsArray = Object.values(studentsData);

            studentsArray.forEach(student => {
                if (student.firstName && student.lastName && student.facultyNumber && student.grade !== undefined) {
                    createStudentRow(student);
                }
            });

        } catch (error) {
            console.error("Error loading students:", error);
            displayNotification(`Error: ${error.message}`);
        }
    }

    function createStudentRow(student) {
        let tr = document.createElement('tr');

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = student.firstName;

        let tdLastName = document.createElement('td');
        tdLastName.textContent = student.lastName;

        let tdFacultyNumber = document.createElement('td');
        tdFacultyNumber.textContent = student.facultyNumber;

        let tdGrade = document.createElement('td');
        tdGrade.textContent = Number(student.grade).toFixed(2);

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);

        tableBody.appendChild(tr);
    }

    async function submitStudentHandler(event) {
        event.preventDefault(); 

        let formData = new FormData(event.currentTarget); 
        let firstName = formData.get('firstName').trim();
        let lastName = formData.get('lastName').trim();
        let facultyNumber = formData.get('facultyNumber').trim();
        let gradeString = formData.get('grade').trim();

        if (!firstName || !lastName || !facultyNumber || !gradeString) {
            displayNotification("Error: All fields are required!");
            return;
        }

        if (!/^\d+$/.test(facultyNumber)) {
            displayNotification("Error: Faculty Number must contain only digits!");
            return;
        }

        let gradeNumber = Number(gradeString); 
        if (isNaN(gradeNumber)) {
            displayNotification("Error: Grade must be a valid number!");
            return;
        }

        displayNotification("");

        let studentData = {
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            grade: gradeNumber 
        };

        try {
            let response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error creating student! status: ${response.status}`);
            }

            event.currentTarget.reset(); // Resets the form that triggered the event

            await loadStudents();

        } catch (error) {
            console.error("Error submitting student:", error);
            displayNotification(`Error: ${error.message}`); // Display error to user
        }
    }

    function displayNotification(message) {
        if (notificationP) {
            notificationP.textContent = message;
        }
    }
}

attachEvents();