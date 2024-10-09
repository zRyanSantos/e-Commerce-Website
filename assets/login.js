// --------------------------------- DECLARANDO OS ELEMENTOS -------------------------------------- //

var emaillogin = document.querySelector('input.input-login-email');
var senhalogin = document.querySelector('input.input-login-password');
var submitlogin = document.querySelector('button.input-login-submit');

// --------------------------------------- FUNÇÃO PRINCIPAL --------------------------------------- //

submitlogin.addEventListener('click', function(event){
    event.preventDefault();

    if (emaillogin.value !== '' && senhalogin.value !== '') {
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        var usuarioValido = usuarios.find(function(usuario) {
            return usuario.email === emaillogin.value && usuario.senha === senhalogin.value;
        });

        if (usuarioValido) {
            window.location.href = "/e-Commerce Website/main.html";
        } else {
            alert('Dados incorretos ou não cadastrados!');
        }
    } else {
        alert('Por favor, preencha ambos os campos antes de enviá-los.');
    }
});

// ------------------------------------------------------------------------------------------------ //