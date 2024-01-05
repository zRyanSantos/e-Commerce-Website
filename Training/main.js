var cm;

function ryanpenis(){
    cm = prompt('QUAL O TAMANHO DO SEU INSTRUMENTO?')
}

ryanpenis()
if(cm <= 5){
    alert('VOCE TEM PIRU PEQUENO IGUAL O VININHO DO ROLAMENTO INTENSIVO')
}
else if(cm > 5 && cm <= 20){
    alert('SEU PAU ESTÁ NA MÉDIA')
}
else if (cm > 20){
    alert('SEU PAU É GIGANTESCO IGUAL O DO RYANZITO')
}
else{
    alert(`Você digitou "${cm}", digite apenas numeros, não seja um neandertal!`)
    ryanpenis()
}