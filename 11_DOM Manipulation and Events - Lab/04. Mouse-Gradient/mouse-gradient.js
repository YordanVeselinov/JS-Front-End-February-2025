function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        let gradientWidth = gradientElement.clientWidth;
        let mouseX = event.offsetX;

        let percentage = Math.floor((mouseX / gradientWidth) * 100);

        resultElement.textContent = `${percentage}%`;
    });

    gradientElement.addEventListener('mouseout', () => {
        resultElement.textContent = '';
    });
}
