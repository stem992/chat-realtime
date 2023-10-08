
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
                if(messageText == 'ciao'){
                    responseElement.textContent = 'ciao a te!';

                } else if(messageText == 'come ti chiami?'){
                    responseElement.textContent = 'stefano';
                    
                }  else {
                    responseElement.textContent = 'ricevuto!';
                }
               
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
