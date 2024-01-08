var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var response = document.querySelector('div.resposta')
var msg = document.querySelector('p.msg')

function contar(){

    response.innerHTML = ''
    var start = Number(inicio.value)
    var end = Number(fim.value)
    var pass = Number(passo.value)
    msg.remove()
    console.log(start, end, pass)
    if (pass == 0) {
        alert('Passo inválido! Considerando Passo 1')
        pass = 1
    } 
    if (start <= end && pass > 0 && start != 0 && end != 0) {
        console.log(start, end)
        while (start <= end) {
            response.innerHTML += `${start} 👉🏻`
            start = start + pass
        }
        response.innerHTML += `🏁`
    }
    else{
        response.innerHTML = `Impossível contar!`
    }
}

