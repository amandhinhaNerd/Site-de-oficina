const btn = document.querySelector('.btn');
let tema = 'claro';

const textos = document.querySelectorAll('p');
const titulos = document.querySelectorAll('h2');
const titulos2 = document.querySelectorAll('h3');

function click() {
    if (tema === 'claro') {
        tema = 'escuro';
        document.body.style.backgroundColor = '#020037';
        textos.forEach(t => t.style.color = 'white');
        titulos.forEach(t => t.style.color = 'white');
        titulos2.forEach(t => t.style.color = 'white');
    } else {
        tema = 'claro';
        document.body.style.backgroundColor = '#B0BFF8';
        textos.forEach(t => t.style.color = 'black');
        titulos.forEach(t => t.style.color = 'black');
        titulos2.forEach(t => t.style.color = 'black');
    }
}

btn.addEventListener('click', click);


const modal = document.querySelector('dialog');
console.log('modal')
console.log(modal)

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
}