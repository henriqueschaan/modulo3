"use strict";
let cards = [];
function createCard(title, date, description) {
    const card = {
        title,
        date,
        description
    };
    cards.push(card);
    renderCards();
}
function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${formatDate(card.date)}</p>
            <p>${card.description}</p>
        `;
        container.appendChild(cardElement);
    });
    const count = document.getElementById('card-count');
    count.textContent = `Total de cards: ${cards.length}`;
}
function formatDate(date) {
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}
document.getElementById('add-card').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const date = new Date(document.getElementById('date').value);
    const description = document.getElementById('description').value;
    createCard(title, date, description);
});
