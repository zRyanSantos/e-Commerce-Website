var display = document.querySelector('h1.numero')
var mult = document.querySelector('button.mult')
var div = document.querySelector('button.div')
var add = document.querySelector('button.add')
var sub = document.querySelector('button.sub')

var insertComma = false 
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

document.addEventListener('keypress', function(e) {

    if(e.key === '0'){
        var numberZero = document.querySelector('button.button-zero')
        numberZero.click()
    }
    else if(e.key === ','){
        var comma = document.querySelector('button.button-comma')
        comma.click()
    }
    else if(e.key === `+`){
        add.click()
    }
    else if(e.key === `-`){
        sub.click()
    }
    else if(e.key === `*`){
        mult.click()
    }
    else if(e.key === `/`){
        div.click()
    }
    else if(e.key === 'Enter'){
        var equality = document.querySelector('button.button-equality')
        equality.click()
    }
    else if(e.key === '1'){
        var numberOne = document.querySelector('button.button-one')
        numberOne.click()
    }
    else if(e.key === '2'){
        var numberTwo = document.querySelector('button.button-two')
        numberTwo.click()
    }
    else if(e.key === '3'){
        var numberThree = document.querySelector('button.button-three')
        numberThree.click()
    }
    else if(e.key === '4'){
        var numberFour = document.querySelector('button.button-four')
        numberFour.click()
    }
    else if(e.key === '5'){
        var numberFive = document.querySelector('button.button-five')
        numberFive.click()
    }
    else if(e.key === '6'){
        var numberSix = document.querySelector('button.button-six')
        numberSix.click()
    }
    else if(e.key === '7'){
        var numberSeven = document.querySelector('button.button-seven')
        numberSeven.click()
    }
    else if(e.key === '8'){
        var numberEight = document.querySelector('button.button-eight')
        numberEight.click()
    }
    else if(e.key === '9'){
        var numberNine = document.querySelector('button.button-nine')
        numberNine.click()
    }
})

document.addEventListener('keydown', function(e){
    if(e.key === 'Backspace'){
        var clean = document.querySelector('button.button-clean')
        clean.click()
    }
})

function clean(){
    
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
    insertComma = false
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

    else if (insertComma && limit.length < 13 && !verify) {
        mydisplay += `.${n}`
        display.innerHTML += `${n}`
        verify = true
    }
    else if (insertComma && limit.length < 13 && verify) {
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
    
function comma(){

    if(!insertComma){
        display.innerHTML += `,`
        insertComma = true
    }

}

function multiply(){

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
        insertComma = false
        verify = false
        limit = []
        equality()
        firstNumber = Number(mydisplay)
        mydisplay = 0
        isMult = true
    }
}

function division(){

    if (mydisplay != 0){

    div.style.backgroundColor = '#c900ff'

    }

    isMult = false
    isAdd = false
    isSub = false
    insertComma = false
    verify = false
    limit = []
    equality()
    firstNumber = Number(mydisplay)
    mydisplay = 0
    isDivi = true

}

function addition(){

    if (mydisplay != 0){

    add.style.backgroundColor = '#c900ff'

    }

    isSub = false
    isMult = false
    isDivi = false
    insertComma = false
    verify = false
    limit = []
    equality()
    firstNumber = Number(mydisplay)
    mydisplay = 0
    isAdd = true

}

function subtraction(){

    if (mydisplay != 0){

    sub.style.backgroundColor = '#c900ff'

    }

    isAdd = false
    isMult = false
    isDivi = false
    insertComma = false
    verify = false
    limit = []
    equality()
    firstNumber = Number(mydisplay)
    mydisplay = 0
    isSub = true

}

function equality(){

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

function signal(){

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

function porcent(){
    isPorcent = false
    mydisplay = mydisplay/100
    insertComma = false
    verify = false
    mydisplay = Number(mydisplay)
    display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    multiply()
    isPorcent = true
}

function equal(){

    if (mydisplay != 0){

    mult.style.backgroundColor = 'Purple'
        
    div.style.backgroundColor = 'Purple'
        
    add.style.backgroundColor = 'Purple'
        
    sub.style.backgroundColor = 'Purple'
    
    }
    
}

// Created by: RyanZito