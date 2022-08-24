import {createHeader} from './home.js'



function createMenuTitle(container) {
    let titleDiv = document.createElement('div')
    titleDiv.classList.add("title")

    let titleH1 = document.createElement('h1')
    titleH1.textContent = 'Menu'

    titleDiv.appendChild(titleH1)
    container.appendChild(titleDiv)
}


function createMenu(container) {
    let menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    let menuItems = document.createElement('div')
    menuItems.classList.add('menu-items')

    for (let i = 0; i < 8; i++) {
        let foodDiv = document.createElement('div')
        foodDiv.classList.add('food')
        
        let foodImg = document.createElement('img')
        foodImg.classList.add('food-img')
        foodImg.src = 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg'
        foodDiv.appendChild(foodImg)
        
        let foodTitle = document.createElement('h3')
        foodTitle.textContent = 'Pizza'
        foodDiv.appendChild(foodTitle)

        let foodDesc = document.createElement('p')
        foodDesc.textContent = "A wonderful pizza"
        foodDiv.appendChild(foodDesc)

        let priceTitle = document.createElement('p')
        priceTitle.textContent = '$100.00'
        foodDiv.appendChild(priceTitle)
        
        menuItems.appendChild(foodDiv)
    }

    menuContainer.appendChild(menuItems)
    container.appendChild(menuContainer)
}

export {createMenuTitle, createMenu}