const btn = document.querySelector('.btn')
let tema = 'claro'

const textos = document.querySelectorAll('p')
const titulos = document.querySelectorAll('h2')

function click() {
    console.log("aeeeee")
    if (tema === 'claro') {
        tema = "escuro"
        document.querySelector('body').style.backgroundColor = 'black'
        for (let i = 0; i < textos.length && titulos.length; i++) {
            textos[i].style.color = 'white'
            titulos[i].style.color = 'white'
        }
    } else {
        tema = 'claro'
        document.querySelector('body').style.backgroundColor = 'white'
        for (let i = 0; i < textos.length && titulos.length; i++) {
            textos[i].style.color = 'black'
            titulos[i].style.color = 'black'
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

function closeModal(){
    modal.close();
}