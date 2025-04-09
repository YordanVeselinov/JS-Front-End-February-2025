function attachEvents() {
    let messagesTextarea = document.getElementById('messages');
    let authorInput = document.querySelector('input[name="author"]');
    let contentInput = document.querySelector('input[name="content"]');
    let submitButton = document.getElementById('submit');
    let refreshButton = document.getElementById('refresh');

    let url = 'http://localhost:3030/jsonstore/messenger';

    submitButton.addEventListener('click', sendMessageHandler);
    refreshButton.addEventListener('click', refreshMessagesHandler);

    async function sendMessageHandler() {
        let authorName = authorInput.value.trim();
        let messageText = contentInput.value.trim();

        if (!authorName || !messageText) {
            console.log("Author and Message fields cannot be empty.");
            return; 
        }

        let messageData = {
            author: authorName,
            content: messageText,
        };

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            authorInput.value = '';
            contentInput.value = '';

        } catch (error) {
            console.error("Error sending message:", error);
        }
    }

    async function refreshMessagesHandler() {
        try {
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let messagesData = await response.json();
            let formattedMessages = [];
            
            if (typeof messagesData === 'object' && messagesData !== null) {
                 formattedMessages = Object.values(messagesData)
                    .map(msg => `${msg.author}: ${msg.content}`);
            } else {
                 if (Array.isArray(messagesData)) {
                      formattedMessages = messagesData.map(msg => `${msg.author}: ${msg.content}`);
                 } else {
                      throw new Error("Received data is not in expected format (object or array).");
                 }
            }

            messagesTextarea.value = formattedMessages.join('\n');

        } catch (error) {
            console.error("Error refreshing messages:", error);
            messagesTextarea.value = "Error loading messages."; 
        }
    }
}

attachEvents();