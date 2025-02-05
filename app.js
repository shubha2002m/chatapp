const users = [
    { name: 'Neha', pic: 'imgs/cat1.jpg' },
    { name: 'Anshi', pic: 'imgs/cat2.jpg' },
    { name: 'Kritika', pic: 'imgs/cat5.jpg' }
];
const chats = {};
let selectedUser = null;

const userList = document.getElementById('user-list');
const chatBox = document.getElementById('chat-box');
const chatHeaderName = document.getElementById('chat-user-name');
const chatHeaderPic = document.getElementById('chat-user-pic');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

users.forEach(user => {
    chats[user.name] = [];
    const li = document.createElement('li');
    li.classList.add('user-item');
    li.innerHTML = `<img src="${user.pic}" alt="${user.name}"><span>${user.name}</span>`;
    li.addEventListener('click', () => openChat(user));
    userList.appendChild(li);
});

function openChat(user) {
    selectedUser = user.name;
    chatHeaderName.textContent = user.name;
    chatHeaderPic.src = user.pic;
    chatBox.innerHTML = '';
    chats[user.name].forEach(msg => displayMessage(msg));
}

function sendMessage() {
    if (!selectedUser || !messageInput.value.trim()) return;
    const message = messageInput.value.trim();
    chats[selectedUser].push(message);
    displayMessage(message);
    messageInput.value = '';
}

function displayMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

document.addEventListener("DOMContentLoaded", () => {
    openChat(users[0]); // Open Alice's chat by default
});