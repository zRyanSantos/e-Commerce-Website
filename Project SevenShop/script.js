var userName = document.querySelector('input.input-name')
var email = document.querySelector('input.input-email')
var submit = document.querySelector('button.input-submit')

submit.addEventListener('click', function(){
    alert(`Parabéns ${userName.value}!\nSeu email: ${email.value} foi cadastrado com sucesso!\nCaso os dados estejam incorretos, envie-os novamente.`)
})