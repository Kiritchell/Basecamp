import {menu} from "/menu.js"

const menuFeed = document.querySelector('#menuFeed')
const orderList = document.querySelector('#orderList')
const orderListTitle = document.querySelector('#orderListTitle')
const modalPopup = document.querySelector('#modalPopup')
const thanks = document.querySelector('#thanks')
const orderTotal = document.querySelector('#totalSection')
let totalPrice = 0




document.addEventListener('click', function(e){
if(e.target.dataset.add){
    handleAddClick(e.target.dataset.add)
}
if(e.target.id==="buyNowButton"){
    modalPopup.classList.toggle('modalPopupShow')
}
if(e.target.id === "orderBtn"){
    thanksOrder(e)

}
})


function handleAddClick(menuId){

    const targetMenuObj = menu.filter(function(menu){
        return menu.UUID === menuId
    })[0]

    let cart = []


    if(cart.length<=0){
    orderListTitle.innerHTML=` <h3>Order</h3>`}

    cart.push(targetMenuObj)

    console.log(cart[0].item)

    orderList.innerHTML +=
    `<div id="cart">
    <div class="orderList">
        <span class="listItem">${cart[0].item}</span>
        <span class="listItem">$${cart[0].price}.00</span>
        <br>
    </div>
    </div>`


        orderTotal.innerHTML = `<h1>Total = $${totalPrice+=cart[0].price}</h1>
        <button id="buyNowButton">Order</button>`

}




function renderMenu(){

menu.forEach(function(menuItems){


menuFeed.innerHTML +=
    `<div class="item-card">

            <div class="menu-icon">
            <i class="fa-solid fa-${menuItems.icon}"></i>
            </div>
            <div class="menu-item">
            <span>${menuItems.item}</span>
            <span>$${menuItems.price}</span>
            <h4>${menuItems.description}</h4>
            <i class="addBtn fa-regular fa-plus" data-add="${menuItems.UUID}"></i>
            </div>

    </div>`
})
}


function thanksOrder(e){
    console.log(e.target.id)
    thanks.innerHTML=` <h3 class="thanksOrder">Thanks for ordering!</h3>`
    modalPopup.classList.toggle('modalPopupShow')
    orderList.innerHTML = ''
    orderListTitle.innerHTML = ''
    orderTotal.innerHTML = ''
    totalPrice=0

}

renderMenu()