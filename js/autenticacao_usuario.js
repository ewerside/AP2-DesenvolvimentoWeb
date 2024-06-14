const senhaHash = 'b7e94be513e96e8c45cd23d162275e5a12ebde9100a425c4ebcdd7fa4dcd897c';

function login() {
    const senhaDigitada = document.getElementById('senha').value; 
    const mensagem = document.getElementById('mensagem');

    if (hex_sha256(senhaDigitada) === senhaHash) {
        mensagem.innerHTML = '<h3 class="sucesso">Senha Correta! Redirecionando...</h3>';
        localStorage.setItem('logado', '1');

        setTimeout(() => {
            mensagem.innerHTML = '';
            window.location.href = 'main.html'; 
        }, 2000);

    } else {
        mensagem.innerHTML = '<h3 class="fracasso">Senha incorreta</h1>';
    }
}

document.getElementById('btn_login').onclick = login;

document.getElementById('login-form').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão de enviar o formulário
        login(); // Chama a função de login
    }
});
