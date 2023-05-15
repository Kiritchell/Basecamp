import {menu} from "/menu.js"

const menuFeed = document.querySelector('#menuFeed')
const orderList = document.querySelector('#orderList')

document.addEventListener('click', function(e){
if(e.target.dataset.add){
    handleAddClick(e.target.dataset.add)
}
})



function renderMenu(){

for(let menuItems of menu){



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
}
}



function handleAddClick(){


    orderList.innerHTML +=
    `<div>
        <h3>Order</h3>
        <span>${menu[0].item}</span>
    </div>`

}

renderMenu()