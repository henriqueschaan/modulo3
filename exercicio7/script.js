const form = document.getElementById('dataForm');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
    form.reset();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;

    const data = {
        nome,
        email,
        telefone,
        cpf
    };

    let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    dataList.push(data);
    localStorage.setItem('dataList', JSON.stringify(dataList));

    window.location.href = 'table.html';
});
