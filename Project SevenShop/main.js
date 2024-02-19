var body = document.body
var button = document.querySelector('input.toggle')
var container = document.querySelector('section.container')

button.addEventListener("click", function(){
    if(button.checked){
        body.classList = 'body_whiteTheme'
        container.classList = 'container_whiteTheme'
    }
    else{
        body.classList = 'body'
        container.classList = 'container'
    }
})



