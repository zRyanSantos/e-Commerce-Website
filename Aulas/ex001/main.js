var anoNascimento = document.querySelector('input#year');
var response = document.querySelector('div.resposta')
var message = document.querySelector('p.dados')

var masc = document.getElementById('M');
var fem = document.getElementById('F');

var data = new Date()
var ano = data.getFullYear()

function nascimento() {

    message.remove()

    var Nascimento = Number(anoNascimento.value)

    var idade = ano - Nascimento

    if (idade <= 0 || idade > 120) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        return 0;
    }
    else if (masc.checked) {
        response.innerHTML = `Detectamos um homem com ${idade} anos.`;
    } 
    else if (fem.checked) {
        response.innerHTML = `Detectamos uma mulher com ${idade} anos.`;
    } 

    else {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }

    if(fem.checked) {
        if (idade < 12) {
            response.innerHTML += `<img class="imagem" src="https://cdn.discordapp.com/attachments/816758997473427497/1193655660387250298/pexels-janko-ferlic-1493111.jpg?ex=65ad8176&is=659b0c76&hm=2b769fd78f85d19f3336105665537281ca120928f35161d07f979ac98d2c8e56&">`
            }
        else if (idade <= 49) {
            response.innerHTML += `<img class="imagem" src="https://cdn.discordapp.com/attachments/816758997473427497/1193655656390082691/pexels-anastasiya-gepp-1462630.jpg?ex=65ad8175&is=659b0c75&hm=6efc78ca2ba08133135cfe2063f37363f127cd30b2073359dc859147415ad11e&">`
        }

        else if (idade >= 50 && idade < 110) {
            response.innerHTML += `<img class="imagem" src="https://cdn.discordapp.com/attachments/816758997473427497/1193655661205143613/pexels-victor-l-2790438.jpg?ex=65ad8176&is=659b0c76&hm=02f9d44be0129d8ef5f8265e9bb0f5fb91a7555c51cbb901312aae78ad8ba659&">`
        }
    }
    if(masc.checked) {
        if (idade < 12) {
            response.innerHTML += `<img class="imagem" src="https://media.discordapp.net/attachments/816758997473427497/1193655657056960532/pexels-bess-hamiti-35537_-_Copia.jpg?ex=65ad8175&is=659b0c75&hm=8b1771976d1b6c856a4e259a812c3ae1097a7b6ac29e28887ef81e521a4fa7c0&=&format=webp&width=977&height=657">`
        }
        else if (idade <= 49) {
            response.innerHTML += `<img class="imagem" src="https://media.discordapp.net/attachments/816758997473427497/1193655659342856342/pexels-sebastiaan-stam-1304647.jpg?ex=65ad8176&is=659b0c76&hm=bd86ca4ef73b7734c3475896629f396881530b00e4ffdee0c346b0f774fbf1a2&=&format=webp&width=384&height=656">`
        }
        else if (idade >= 50 && idade < 110) {
            response.innerHTML += `<img class="imagem" src="https://media.discordapp.net/attachments/816758997473427497/1193655657954553866/pexels-andrea-piacquadio-3831645.jpg?ex=65ad8175&is=659b0c75&hm=8a52f5e7366d8967aad40f2d89b3f0391f2379ab9de39c2a51fed159915b7be3&=&format=webp&width=533&height=657">`
        }
    }
}