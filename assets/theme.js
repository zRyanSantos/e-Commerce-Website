var body = document.body
var button = document.querySelector('input.toggle')
var container = document.querySelector('section.main_container')
var header = document.querySelector('header.main_header')
var products = document.querySelector('ol.products')
var submit = document.querySelector('button.input-submit')

button.addEventListener("click", function(){
    if(button.checked){
        body.classList = 'body_whiteTheme'
        container.classList = 'main_container_whiteTheme'
        header.classList = 'main_header_whiteTheme'
        products.classList = 'products_whiteTheme'
        submit.classList = 'input-submit_whiteTheme'
    }
    else{
        body.classList = 'body'
        container.classList = 'main_container'
        header.classList = 'main_header'
        products.classList = 'products'
        submit.classList = 'input-submit'
    }
})