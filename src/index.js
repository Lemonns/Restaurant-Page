import './style.css';
import {createHeader, renderHomeScreen} from './home.js'
import {createMenuTitle, createMenu} from './menu.js'
import {createContactForm} from './contact.js'

const mainContainer = document.querySelector('.content')
const secondaryContainer = document.createElement('div')

secondaryContainer.classList.add('secondary-content')

createHeader(mainContainer)
mainContainer.appendChild(secondaryContainer)
renderHomeScreen(secondaryContainer)

const menuButton = document.querySelector('.menu')
const homeButton = document.querySelector('.home')
const contactButton = document.querySelector('.contact')

menuButton.addEventListener('click', () => {
    clearContent(secondaryContainer)
    createMenuTitle(secondaryContainer)
    createMenu(secondaryContainer)
})

contactButton.addEventListener('click', () => {
    clearContent(secondaryContainer)
    createContactForm(secondaryContainer)
})


homeButton.addEventListener('click', () => {
    clearContent(secondaryContainer)
    renderHomeScreen(secondaryContainer)
})


function clearContent(contentContainer) {
    contentContainer.innerHTML = "";
}
