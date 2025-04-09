function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let infoSpan = document.querySelector('#info span');

    let currentStopId = 'depot';
    let currentStopName = '';
    let nextStopId = '';

    async function depart() {
        try {
            let response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`);
            if (!response.ok) {
                throw new Error('Error');
            }
            let data = await response.json();
            currentStopName = data.name;
            nextStopId = data.next;

            infoSpan.textContent = `Next stop ${currentStopName}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            infoSpan.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${currentStopName}`;
        currentStopId = nextStopId;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();