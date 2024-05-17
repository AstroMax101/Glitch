document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user-message');

    setTimeout(() => {
        const botReply = generateBotReply(userInput);
        addMessage(botReply, 'bot-message');
    }, 800);

    document.getElementById('user-input').value = '';
});

function addMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.innerHTML = `<p>${message}</p>`;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function generateBotReply(userInput) {
    const responses = [
        "I'm not sure I understand.",
        "Can you tell me more?",
        "That's interesting!",
        "Let's talk about something else.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
