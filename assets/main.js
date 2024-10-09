// --------------------------------- DECLARANDO OS ELEMENTOS -------------------------------------- //

var userName = document.querySelector('input.input-name')
var email = document.querySelector('input.input-email')
var submit = document.querySelector('button.input-submit')

// --------------------------------------- FUNÇÃO PRINCIPAL --------------------------------------- //

submit.addEventListener('click', function(){
    
    if(userName.value === `` || email.value === ``){
        alert(`Por favor, preencha os campos antes de envia-los. `)
    }
    else{
    alert(`Parabéns ${userName.value}!\nSeu email: ${email.value} foi cadastrado com sucesso!\nCaso os dados estejam incorretos, envie-os novamente.`)
    }
})

// ------------------------------------------------------------------------------------------------ //