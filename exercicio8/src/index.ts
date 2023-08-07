interface Card {
    title: string;
    date: Date;
    description: string;
}

let cards: Card[] = [];

function createCard(title: string, date: Date, description: string): void {
    const card: Card = {
        title,
        date,
        description
    };
    cards.push(card);
    renderCards();
}

function renderCards(): void {
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

function formatDate(date: Date): string {
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}


document.getElementById('add-card').addEventListener('click', () => {
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const date = new Date((document.getElementById('date') as HTMLInputElement).value);
    const description = (document.getElementById('description') as HTMLInputElement).value;
    createCard(title, date, description);
});
