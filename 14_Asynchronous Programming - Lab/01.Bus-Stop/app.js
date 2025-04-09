async function getInfo() {
    let stopIdInput = document.getElementById('stopId');
    let stopNameDiv = document.getElementById('stopName');
    let busesList = document.getElementById('buses');

    let stopId = stopIdInput.value;

    stopNameDiv.textContent = '';
    busesList.innerHTML = '';

    if (!stopId) {
        stopNameDiv.textContent = 'Please enter a Stop ID.';
        return;
    }

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        let data = await response.json();

        if (typeof data.name !== 'string' || typeof data.buses !== 'object' || data.buses === null) {
            throw new Error('Invalid data format received.');
        }

        stopNameDiv.textContent = data.name;

        let busEntries = Object.entries(data.buses);

        if (busEntries.length === 0) {
            let li = document.createElement('li');
            li.textContent = 'No buses arriving soon.';
            busesList.appendChild(li);
        } else {
            for (let [busId, time] of busEntries) {
                let li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesList.appendChild(li);
            }
        }

    } catch (error) {
        stopNameDiv.textContent = 'Error';
        busesList.innerHTML = '';
        console.error("Bus Info Error:", error);
    }
}
