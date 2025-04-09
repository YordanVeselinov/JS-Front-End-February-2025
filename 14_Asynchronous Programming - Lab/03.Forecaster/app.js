function attachEvents() {
    let locationInput = document.getElementById('location');
    let submitButton = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast'); 
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');

    let currentLabelHtml = '<div class="label">Current conditions</div>';
    let upcomingLabelHtml = '<div class="label">Three-day forecast</div>';

    let baseUrl = 'http://localhost:3030/jsonstore/forecaster/';

    let weatherSymbols = {
        'Sunny': '&#x2600;',        
        'Partly sunny': '&#x26C5;',   
        'Overcast': '&#x2601;',      
        'Rain': '&#x2614;',           
        'Degrees': '&#176;'          
    };

    submitButton.addEventListener('click', getWeather);

    async function getWeather() {
        let locationName = locationInput.value.trim();

        if (!locationName) {
            return; 
        }

        forecastDiv.style.display = 'none'; 
        currentDiv.innerHTML = currentLabelHtml;
        upcomingDiv.innerHTML = upcomingLabelHtml;


        try {
            let locationsResponse = await fetch(baseUrl + 'locations');
            if (!locationsResponse.ok) {
                throw new Error(`Locations request failed: ${locationsResponse.status} ${locationsResponse.statusText || ''}`);
            }
            let locations;
            try {
                 locations = await locationsResponse.json();
            } catch (jsonError) {
                 throw new Error("Invalid data received for locations.");
            }

            let location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());
            if (!location) {
                throw new Error(`Location "${locationName}" not found.`);
            }
            let locationCode = location.code;

            let [todayResponse, upcomingResponse] = await Promise.all([
                fetch(`${baseUrl}today/${locationCode}`),
                fetch(`${baseUrl}upcoming/${locationCode}`)
            ]);

            if (!todayResponse.ok) {
                 throw new Error(`Today's forecast request failed: ${todayResponse.status} ${todayResponse.statusText || ''}`);
            }
            if (!upcomingResponse.ok) {
                 throw new Error(`Upcoming forecast request failed: ${upcomingResponse.status} ${upcomingResponse.statusText || ''}`);
            }

            let todayData, upcomingData;
             try {
                 todayData = await todayResponse.json();
                 upcomingData = await upcomingResponse.json();
             } catch (jsonError) {
                 throw new Error("Invalid data received for forecast.");
             }

            (todayData, upcomingData);

        } catch (error) {
            console.error("Error during weather fetch:", error);
            displayError(error.message || "An unknown error occurred.");
        }
    }

    function displayForecast(todayData, upcomingData) {
        currentDiv.innerHTML = currentLabelHtml;
        upcomingDiv.innerHTML = upcomingLabelHtml;

        let currentForecast = todayData.forecast;
        if (!currentForecast || typeof currentForecast !== 'object') {
             displayError("Invalid current forecast data format.");
             return;
        }

        let currentForecastsDiv = document.createElement('div');
        currentForecastsDiv.className = 'forecasts';

        let conditionSymbolSpan = document.createElement('span');
        conditionSymbolSpan.className = 'condition symbol';
        conditionSymbolSpan.innerHTML = weatherSymbols[currentForecast.condition] || '?';

        let conditionInfoSpan = document.createElement('span');
        conditionInfoSpan.className = 'condition';

        let locationSpan = document.createElement('span');
        locationSpan.className = 'forecast-data';
        locationSpan.textContent = todayData.name || 'Unknown Location';

        let tempSpan = document.createElement('span');
        tempSpan.className = 'forecast-data';
        let lowTemp = currentForecast.low ?? 'N/A';
        let highTemp = currentForecast.high ?? 'N/A';
        tempSpan.innerHTML = `${lowTemp}${weatherSymbols.Degrees}/${highTemp}${weatherSymbols.Degrees}`;

        let conditionTextSpan = document.createElement('span');
        conditionTextSpan.className = 'forecast-data';
        conditionTextSpan.textContent = currentForecast.condition || 'N/A';

        conditionInfoSpan.appendChild(locationSpan);
        conditionInfoSpan.appendChild(tempSpan);
        conditionInfoSpan.appendChild(conditionTextSpan);

        currentForecastsDiv.appendChild(conditionSymbolSpan);
        currentForecastsDiv.appendChild(conditionInfoSpan);
        currentDiv.appendChild(currentForecastsDiv);


         if (!upcomingData.forecast || !Array.isArray(upcomingData.forecast)) {
             displayError("Invalid upcoming forecast data format.");
             return;
         }

        let upcomingForecastInfoDiv = document.createElement('div');
        upcomingForecastInfoDiv.className = 'forecast-info';

        upcomingData.forecast.forEach(day => {
            if (!day || typeof day !== 'object') return;

            let upcomingSpan = document.createElement('span');
            upcomingSpan.className = 'upcoming';

            let symbolSpan = document.createElement('span');
            symbolSpan.className = 'symbol';
            symbolSpan.innerHTML = weatherSymbols[day.condition] || '?';

            let tempSpan = document.createElement('span');
            tempSpan.className = 'forecast-data';
            let dayLowTemp = day.low ?? 'N/A';
            let dayHighTemp = day.high ?? 'N/A';
            tempSpan.innerHTML = `${dayLowTemp}${weatherSymbols.Degrees}/${dayHighTemp}${weatherSymbols.Degrees}`;

            let conditionSpan = document.createElement('span');
            conditionSpan.className = 'forecast-data';
            conditionSpan.textContent = day.condition || 'N/A';

            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(tempSpan);
            upcomingSpan.appendChild(conditionSpan);
            upcomingForecastInfoDiv.appendChild(upcomingSpan);
        });

        upcomingDiv.appendChild(upcomingForecastInfoDiv);

        forecastDiv.style.display = 'block';
    }

    function displayError(message) {
        currentDiv.innerHTML = currentLabelHtml;
        upcomingDiv.innerHTML = upcomingLabelHtml;

        let errorMsgElement = document.createElement('div');
        errorMsgElement.textContent = `Error: ${message}`;
        errorMsgElement.style.textAlign = 'center';
        errorMsgElement.style.padding = '1em 0';
        errorMsgElement.style.fontWeight = 'bold';
        errorMsgElement.style.color = 'red';

        currentDiv.appendChild(errorMsgElement);

        forecastDiv.style.display = 'block';
    }
}

attachEvents();