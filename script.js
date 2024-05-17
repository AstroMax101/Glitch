const apiKey = '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';

document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user-message');
    fetchBotResponse(userInput);

    document.getElementById('user-input').value = '';
});

function addMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.innerHTML = `<p>${message}</p>`;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat
