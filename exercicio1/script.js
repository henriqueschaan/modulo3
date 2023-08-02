var imagens = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg', 'imagem4.jpg'];
var indexAtual = 0;

function mudarImagem() {
    indexAtual = (indexAtual + 1) % imagens.length;
    document.body.style.backgroundImage = "url('" + imagens[indexAtual] + "')";
}