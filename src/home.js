function createHeader(container) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('navbar')
    
    let newUl = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.classList.add('home')
    let li2 = document.createElement('li')
    li2.classList.add('menu')
    let li3 = document.createElement('li')
    li3.classList.add('contact')

    li1.textContent = 'Home'
    li2.textContent = 'Menu'
    li3.textContent = 'Contact'

    newUl.append(li1, li2, li3)
    newDiv.appendChild(newUl)
    container.appendChild(newDiv)
}

function renderHomeScreen(container) {
    let containerDiv = document.createElement('div')
    containerDiv.classList.add('card-container')

    let bgCard = document.createElement('div')
    bgCard.classList.add('bg-card')
    containerDiv.appendChild(bgCard)

    let titleDiv = document.createElement('div')
    titleDiv.classList.add('head-title')
    bgCard.appendChild(titleDiv)

    let title = document.createElement('h1')
    title.textContent = 'Restaurant'
    titleDiv.appendChild(title)

    container.appendChild(containerDiv)
}


export {createHeader, renderHomeScreen}