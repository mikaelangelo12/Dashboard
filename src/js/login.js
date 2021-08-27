const criarConta = document.getElementById('criarConta');
const entrarConta = document.getElementById('entrarConta');
const containerLogin = document.getElementById('containerLogin');

criarConta.addEventListener('click', () => {
    containerLogin.classList.add("right-panel-active");
});

entrarConta.addEventListener('click', () => {
    containerLogin.classList.remove("right-panel-active");
});