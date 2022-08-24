import './style.css';
import {createHeader, renderHomeScreen} from './home.js'
import {createMenuTitle, createMenu} from './menu.js'
import {createContactForm} from './contact.js'
const mainContainer = document.querySelector('.content')

createHeader(mainContainer)
renderHomeScreen(mainContainer)
createMenuTitle(mainContainer)
createMenu(mainContainer)
createContactForm(mainContainer)

const menuTitle = document.querySelector('.title')
const menu = document.querySelector('.menu-container')
const contactForm = document.querySelector('.contact-container')
menu.style.display = 'none'
menuTitle.style.display = 'none'
contactForm.style.display = 'none'


const menuButton = document.querySelector('.menu')
const homeButton = document.querySelector('.home')
const contactButton = document.querySelector('.contact')

menuButton.addEventListener('click', () => {
    const homeScreen = document.querySelector('.card-container')
    contactForm.style.display = 'none'
    homeScreen.style.display = 'none'
    menu.style.display = 'flex'
    menuTitle.style.display = 'flex'
})

contactButton.addEventListener('click', () => {
    const homeScreen = document.querySelector('.card-container')
    menu.style.display = 'none'
    menuTitle.style.display = 'none'
    homeScreen.style.display = 'none'
    contactForm.style.display = 'flex'
})


homeButton.addEventListener('click', () => {
    const homeScreen = document.querySelector('.card-container')
    homeScreen.style.display = 'flex'
    menu.style.display = 'none'
    menuTitle.style.display = 'none'
    contactForm.style.display = 'none'
})