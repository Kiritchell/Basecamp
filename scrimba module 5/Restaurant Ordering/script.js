import {menu} from "/menu.js"

const menuFeed = document.querySelector('#menuFeed')
const orderList = document.querySelector('#orderList')
const orderListTitle = document.querySelector('#orderListTitle')
const modalPopup = document.querySelector('#modalPopup')

document.addEventListener('click', function(e){
if(e.target.dataset.add){
    handleAddClick(e.target.dataset.add)
}
if(e.target.id==="buyNowButton"){
    modalPopup.classList.toggle('modalPopupShow')
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

    let totalPrice = 0





    orderList.innerHTML +=
    `<div id="cart">
    <div class="orderList">
        <span class="listItem">${cart[0].item}</span>
        <span class="listRemove"><a>Remove</a></span>
        <span class="listItem">$${cart[0].price}.00</span>
        <br>
    </div>
    </div>`





        let orderTotal = document.querySelector('#totalSection')
        orderTotal.innerHTML = `<h1>Total = $${totalPrice+=cart[0].price}</h1>
        <button id="buyNowButton">Order</button>`

}

function renderMenu(){

menu.forEach(function(menuItems){
        // console.log(menuItems.item)

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




renderMenu()