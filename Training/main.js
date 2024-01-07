// var cm;

// function calcIdade(){
//     cm = prompt('Qual é a sua idade?')
// }

// calcIdade()
// if(cm > 0 && cm < 10){
//     alert('Você ainda é bem jovem.')
// }
// else if(cm >= 10 && cm <= 14){
//     alert('Você é um pré-adolescente.')
// }
// else if (cm > 14 && cm < 18){
//     alert('Você é um adolescente.')
// }
// else if (cm >= 18){
//     alert('Você é um adulto.')
// }
// else if (cm === null){
// }
// else{
//     alert(`Você digitou "${cm}". Digite apenas numeros para ter o resultado esperado!`)
//     calcIdade()
// }

var paisInput = document.querySelector('input#country')

var response = document.querySelector('div.resposta')

function calc() {

    var pais = paisInput.value

    response.innerHTML = `Vivendo em ${pais}<br>`

    if (pais.toUpperCase() == 'BRASIL'){
        response.innerHTML += `Você brasileiro!`
    }
    else {
        response.innerHTML += `Você é estrangeiro`
    }

}

