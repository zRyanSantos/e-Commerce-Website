var button = document.querySelector('input.toggle')
var body = document.body

button.addEventListener("click", function(){
    if(button.checked){
        body.classList = 'body_whiteTheme'
    }
    else{
        body.classList = 'body'
    }
})



