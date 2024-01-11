var numero = document.querySelector('input#numero')
var select = document.querySelector('select#sel')
var response = document.querySelector('div.resposta')

var lista = []

function adicionar() {

    var usernum = Number(numero.value)
    var existente = 0    
    
    if(numero.value.length == 0 || usernum > 100 || usernum <= 0){
        alert('Por favor digite um número!')
        return 0
    }

    for (i = 0; i < lista.length; i++) {

        existente = lista[i];
        if (existente == usernum) {
            alert('Este número já foi inserido!')
            return 0
        } 
    }

    lista.push(usernum)

    var tab = document.createElement('option')
    tab.text = (`Valor ${usernum} foi adicionado.`)
    select.appendChild(tab)

}

function analisar() {

    response.innerHTML = ''

    lista.sort(function(a, b) {
        return a - b;
    });

    response.innerHTML += (`<p>Ao todo, temos ${lista.length} números cadastrados.`)
    response.innerHTML += (`<p>O maior valor informado foi ${lista[lista.length  - 1]}.</p>`)
    response.innerHTML += (`<p>O menor valor informado foi ${lista[0]}.<br>`)

    var soma = 0;

    for (i = 0; i < lista.length; i++) {

        soma += lista[i];
    }

    var media = soma / lista.length

    response.innerHTML += (`<p>Somando todos os valores, temos ${soma}.</p>`)
    response.innerHTML += (`<p>A média dos valores digitados é: ${media.toFixed(2)}.</p>`)

    }