const btn = document.querySelector('.btn')
let tema = 'claro'

const textos = document.querySelectorAll('p')
const titulos = document.querySelectorAll('h2')
const titulos2 = document.querySelectorAll('h3')
const imgTema = document.querySelector('#imgTema')


function click() {
    if (tema === 'claro') {
        tema = "escuro"
        document.querySelector('body').style.backgroundColor = '#020037'
        imgTema.style.backgroundColor = 'white'
        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = 'white'
        }
        for (let i = 0; i < titulos2.length; i++) {
            titulos2[i].style.color = 'white'
        }
        for (let i = 0; i < titulos.length; i++) {
            titulos[i].style.color = 'white'
        }
        
    } else {
        tema = 'claro'
        document.querySelector('body').style.backgroundColor = 'white'
        imgTema.style.backgroundColor = 'tranparent'
        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = 'white'
        }
        for (let i = 0; i < titulos2.length; i++) {
            titulos2[i].style.color = 'white'
        }
        for (let i = 0; i < titulos.length; i++) {
            titulos[i].style.color = 'white'
        }
    }
}

btn.addEventListener('click', click)


const modal = document.querySelector('dialog');
console.log('modal')
console.log(modal)

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
}