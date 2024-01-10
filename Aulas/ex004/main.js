function tabuada() {

    var verificar = document.querySelector('input#inicio')
    var select = document.querySelector('select#sel')

    select.innerHTML = ''

if(verificar.value.length == 0){
    alert('Por favor digite um número!')
}
else {
    
    var usernum = Number(verificar.value)

    for ( i = 1; i <= 10; i++ ) {

        var tab = document.createElement('option')
        tab.text = (`${usernum} X ${i} = ${usernum*i}`)
        select.appendChild(tab)

    }
}
}
