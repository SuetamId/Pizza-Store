
const c = (el)=> document.querySelector(el)//retorna apenas os items
const cs= (el)=> document.querySelectorAll(el) //retorna um array de items

//map pizzas
pizzaJson.map((pizza,index) => {
let  pizzaItem = c('.models .pizza-item ').cloneNode(true)

pizzaItem.setAttribute('data-key', index)
pizzaItem.querySelector('.pizza-item--img img').src= pizza.img
pizzaItem.querySelector('.pizza-item--name').innerHTML= pizza.name
pizzaItem.querySelector('.pizza-item--desc').innerHTML= pizza.description
pizzaItem.querySelector('.pizza-item--price').innerHTML= `R$${pizza.price.toFixed(2)}`
pizzaItem.querySelector('a').addEventListener('click', (e)=> {
    e.preventDefault()
let key = e.target.closest('.pizza-item').getAttribute('data-key')
console.log('Pizza clicada : '+ key)

//fazendo o modal aparecer, css=(none), passamos para (flex)
//deixando a opacidade no 0 para poder fazer o efeito no modal, vai js/css
c('.pizzaWindowArea').style.opacity =0    
 c('.pizzaWindowArea').style.display ='flex'
 
 //usando setTimeout para atrasar e dar um tempinho a mais
 setTimeout(() => {
     c('.pizzaWindowArea').style.opacity = 1
 }, 200);
 
})

c('.pizza-area').append(pizzaItem)



})
