document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let encodeForm = document.getElementById('encode');
    let decodeForm = document.getElementById('decode');
    let encodeTextarea = encodeForm.querySelector('textarea');
    let decodeTextarea = decodeForm.querySelector('textarea');

    function encodeMessage(message) {
        let encoded = '';
        for (let i = 0; i < message.length; i++) {
            encoded += String.fromCharCode(message.charCodeAt(i) + 1);
        }
        return encoded;
    }

    function decodeMessage(message) {
        let decoded = '';
        for (let i = 0; i < message.length; i++) {
            decoded += String.fromCharCode(message.charCodeAt(i) - 1);
        }
        return decoded;
    }

    encodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let message = encodeTextarea.value;
        let encodedMessage = encodeMessage(message);
        
        encodeTextarea.value = '';
        decodeTextarea.value = encodedMessage;
    });

    decodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let encodedMessage = decodeTextarea.value;
        let decodedMessage = decodeMessage(encodedMessage);
        
        decodeTextarea.value = decodedMessage;
    });
}