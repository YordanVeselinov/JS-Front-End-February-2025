function extract(elementId) {
    const text = document.getElementById(elementId).textContent;
    const matches = [];
    const pattern = /\(([^)]+)\)/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
        matches.push(match[1]);
    }

    return matches.join('; ');
}