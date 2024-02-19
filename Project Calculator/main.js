var display = document.querySelector('h1.numero')
var mult = document.querySelector('button.mult')
var div = document.querySelector('button.div')
var add = document.querySelector('button.add')
var sub = document.querySelector('button.sub')

var virgulaInserida = false 
var mydisplay = 0
var isAdd = 0
var isSub = 0
var isMult = 0
var isDivi = 0
var firstNumber = 0
var isPorcent = 0
var limit = []
var verify = false

display.innerHTML = `0`

function AC(){
    
    mult.style.backgroundColor = 'Purple'

    div.style.backgroundColor = 'Purple'

    add.style.backgroundColor = 'Purple'

    sub.style.backgroundColor = 'Purple'

    display.innerHTML = `0`

    mydisplay = 0
    firstNumber = 0
    isAdd = 0
    isSub = 0
    isMult = 0
    isDivi = 0
    isPorcent = 0
    limit = []
    virgulaInserida = false
    verify = false

}

function usernum(n){

    if(mydisplay != 0){
        limit.push(n)
    }

    if (display.innerHTML === `0`){
        mydisplay = `${n}`
        mydisplay = Number(mydisplay)
        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }

    else if (virgulaInserida && limit.length < 13 && !verify) {
        mydisplay += `.${n}`
        display.innerHTML += `${n}`
        verify = true
    }
    else if (virgulaInserida && limit.length < 13 && verify) {
        mydisplay += `${n}`
        display.innerHTML += `${n}`
    }
    else if (limit.length < 12){
        mydisplay += `${n}`
        mydisplay = Number(mydisplay)
        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else{
        alert('Você não pode inserir números com mais de 12 caracteres.')
    }

}
    
function virgula(){

    if(!virgulaInserida){
        display.innerHTML += `,`
        virgulaInserida = true
    }

}

function multiplicacao(){

    if (mydisplay != 0){

    mult.style.backgroundColor = '#c900ff'

    }

    if (isPorcent) {
        console.log('fodase')
    }
    else {
        isDivi = false
        isAdd = false
        isSub = false
        isPorcent = false
        virgulaInserida = false
        verify = false
        limit = []
        igualdade()
        firstNumber = Number(mydisplay)
        mydisplay = 0
        isMult = true
    }
}

function divisao(){

    if (mydisplay != 0){

    div.style.backgroundColor = '#c900ff'

    }

    isMult = false
    isAdd = false
    isSub = false
    virgulaInserida = false
    verify = false
    limit = []
    igualdade()
    firstNumber = Number(mydisplay)
    mydisplay = 0
    isDivi = true

}

function adicao(){

    if (mydisplay != 0){

    add.style.backgroundColor = '#c900ff'

    }

    isSub = false
    isMult = false
    isDivi = false
    virgulaInserida = false
    verify = false
    limit = []
    igualdade()
    firstNumber = Number(mydisplay)
    mydisplay = 0
    isAdd = true

}

function subtracao(){

    if (mydisplay != 0){

    sub.style.backgroundColor = '#c900ff'

    }

    isAdd = false
    isMult = false
    isDivi = false
    virgulaInserida = false
    verify = false
    limit = []
    igualdade()
    firstNumber = Number(mydisplay)
    mydisplay = 0
    isSub = true

}

function igualdade(){

    if (isMult) {
        var resultMult = `${firstNumber * Number(mydisplay)}`

        resultMult = Number(resultMult)

        display.innerHTML = `${resultMult.toLocaleString('pt-BR')}`
        mydisplay = `${firstNumber * Number(mydisplay)}`
    }
    else if (isDivi) {
        var resultDivi = `${firstNumber / Number(mydisplay)}`

        resultDivi = Number(resultDivi)

        display.innerHTML = `${resultDivi.toLocaleString('pt-BR')}`
        mydisplay = `${firstNumber / Number(mydisplay)}`
    }
    else if (isAdd) {
        var resultAdd = `${firstNumber + Number(mydisplay)}`

        resultAdd = Number(resultAdd)

        display.innerHTML = `${resultAdd.toLocaleString('pt-BR')}`
        mydisplay = `${firstNumber + Number(mydisplay)}`
    }
    else if (isSub) {
        resultSub = `${firstNumber - Number(mydisplay)}`

        resultSub = Number(resultSub)

        display.innerHTML = `${resultSub.toLocaleString('pt-BR')}`
        mydisplay = `${firstNumber - Number(mydisplay)}`
    }
    
}

function sinal (){

    if(mydisplay > 0){
        mydisplay = mydisplay - mydisplay*2

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else if (mydisplay < 0){
        mydisplay = mydisplay - (mydisplay*2)

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }

}

function porcentagem(){
    isPorcent = false
    mydisplay = mydisplay/100
    virgulaInserida = false
    verify = false
    mydisplay = Number(mydisplay)
    display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    multiplicacao()
    isPorcent = true
}

function igual(){

    if (mydisplay != 0){

    mult.style.backgroundColor = 'Purple'
        
    div.style.backgroundColor = 'Purple'
        
    add.style.backgroundColor = 'Purple'
        
    sub.style.backgroundColor = 'Purple'
    
    }
    
}