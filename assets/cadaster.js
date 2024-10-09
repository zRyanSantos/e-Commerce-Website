// --------------------------------- DECLARANDO OS ELEMENTOS -------------------------------------- //

var emailcadastro = document.querySelector('input.input-cadaster-email');

var senhacadastro = document.querySelector('input.input-cadaster-password');

var submitcadastro = document.querySelector('button.input-cadaster-submit')

// ------------------------------------ CLASSE DOS CADASTROS -------------------------------------- //

class Cadastro {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    verificar(email, senha) {
        return this.email === email && this.senha === senha;
    }
}

// --------------------------------------- FUNÇÃO PRINCIPAL --------------------------------------- //

submitcadastro.addEventListener('click', function(event){

    event.preventDefault()

    if (emailcadastro.value !== '' && senhacadastro.value !== '') {

        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        var usuarioExistente = usuarios.find(function(usuario) {
            return usuario.email === emailcadastro.value;
        });

        if (usuarioExistente) {
            alert('Esse email já está cadastrado! Tente um diferente.');
        } else {

            var novousuario = new Cadastro(emailcadastro.value, senhacadastro.value);

            usuarios.push(novousuario);

            localStorage.setItem('usuarios', JSON.stringify(usuarios))

            alert('Cadastro realizado com sucesso, Agora basta efetuar login e acessar nosso site!');

            window.location.href = "../index.html";
        }
    } else {
        alert('Por favor, preencha ambos os campos antes de enviá-los.');
    }
})

// ------------------------------------------------------------------------------------------------ //