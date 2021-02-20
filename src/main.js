import './components/header.js'


const burguerButton = document.querySelector('#burguer')
const menu = document.querySelector('#Menu')

document.body.addEventListener('click', ev => {
    const target = ev.target
    if(target.classList.contains('burguer-click')){
        burguerButton.classList.toggle('active-burguer')
        menu.classList.toggle('menuActive')
    }
})