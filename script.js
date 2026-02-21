const menuMobile = document.querySelector("#menuMobile")
const menuMobileImg = document.querySelector("#menuMobileImg")
const toogleImg = document.querySelector("#themeToggleImg")
const form = document.getElementById('meuFormulario');


function alternarTema() {
    
    const isInDarkMode = document.body.classList.contains('dark-mode');

    //Se já tiver em dark mode, inverte pro light mode
    if (isInDarkMode) {
        toogleImg.src = 'imgs/sun-light.svg';
        toogleImg.alt = 'Tema Claro';
        menuMobileImg.src = 'imgs/menu-dark.svg' //Aqui no caso é porque a imagem é com o traço preto
        document.body.classList.remove('dark-mode');
    } else {
        toogleImg.src = 'imgs/half-moon.svg';
        toogleImg.alt = 'Tema Escuro';
        menuMobileImg.src = 'imgs/menu-light.svg'
        document.body.classList.toggle('dark-mode');
    }
}

//Adiciona aclasse pro menu mobile funcionar
function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    menu.classList.toggle('active');
}

form.addEventListener('submit', function(event) {
    // Impede que a página recarregue
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verificação de campos vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Regex padrão para teste de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    alert('Mensagem enviada com sucesso!'); // Feedback do envio bem sucedido
    
    // Limpa o formulário depois de enviar
    form.reset();
});
