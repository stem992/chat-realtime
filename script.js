
document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages'); 
    const messageInput = document.getElementById('message-input'); 
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim().toLowerCase(); // rimozione spazi

        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent'); 
            messageElement.textContent = messageText; 
            chatMessages.appendChild(messageElement); 

            setTimeout(() => {
                const responseElement = document.createElement('div');
                responseElement.classList.add('message', 'received');
                let responseText = '';
            
                switch (messageText) {
                    case 'ciao':
                        responseText = 'Ciao a te!';
                        break;
                    case 'come ti chiami?':
                        responseText = 'Il mio nome è Stefano.';
                        break;
                    case 'cosa fai oggi?':
                        responseText = 'Niente di particolare, e tu?';
                        break;
                    case 'che tempo fa?':
                        responseText = 'Non lo so, sono solo un programma.';
                        break;
                    case 'mi piace chattare con te':
                        responseText = 'Anche a me piace chattare con te';
                        break;
                    default:
                        responseText = 'Non capisco.';
                }
            
                responseElement.textContent = responseText;
                chatMessages.appendChild(responseElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
            


            messageInput.value = '';

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            sendButton.click(); 
        }
    });
});
