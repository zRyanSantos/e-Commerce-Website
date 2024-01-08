var content = document.querySelector('div.content')
var response = document.querySelector('div.resposta')
var body = document.querySelector('body')

var data = new Date()
var hora = data.getHours()

// MADRUGADA/MANHÃ
if (hora < 12){
    content.innerHTML = `Agora são ${hora} horas.`
    response.innerHTML = `<img class="imagem" src="https://cdn.discordapp.com/attachments/816758997473427497/1193727516934938755/pexels-artur-roman-1167355_1.jpg?ex=65adc462&is=659b4f62&hm=3c211d0e55c81e9ec15ebe70c84d9a71928c49e5cdea803e99d453b7197e9d8f&">`
    body.style.backgroundColor = 'rgba(159, 173, 112, 1)'
}

// TARDE
else if(hora >= 12 && hora < 18){ 
    content.innerHTML = `Agora são ${hora} horas.`
    response.innerHTML = `<img class="imagem" src="https://cdn.discordapp.com/attachments/816758997473427497/1193727516737818654/pexels-george-desipris-858241.jpg?ex=65adc462&is=659b4f62&hm=4c040d45c4a518f977852c08547e070119ea5ba9925a9db47a1e8756b2ceba67&">`
    body.style.backgroundColor = 'rgba(169, 109, 84, 1)'
}

// NOITE
else if (hora >= 18){
    content.innerHTML = `Agora são ${hora} horas.`
    response.innerHTML = `<img class="imagem" src="https://cdn.discordapp.com/attachments/816758997473427497/1193727516511322122/pexels-drift-shutterbug-2085998.jpg?ex=65adc462&is=659b4f62&hm=c079b29611af68406fabacedab002e6ac26148d7b8fedb4ceb3305f0d0caf11d&">`
    body.style.backgroundColor = 'rgba(19, 2, 37, 0.9)'
}