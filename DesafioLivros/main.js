const nomeUsuario = document.querySelector('#nome');
const email = document.querySelector('#email');
const livro = document.querySelector('#nomeLivro');
const autor = document.querySelector('#autor');

const botaoCriaUsuario = document.querySelector('#criaUsuario');

const listaUsuarios = document.querySelector('#listaUsuarios ul');

botaoCriaUsuario.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(nomeUsuario.value);
})