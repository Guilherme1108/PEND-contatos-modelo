'use strict'

import { lerContatos } from "./contatos.js"

// console.log(await lerContatos())

function criarContatos (contato) {
const container = document.getElementById('container')

const divCardContato = document.createElement('div')
const imagemContato = document.createElement('img')
const nomeContato = document.createElement('h2')
const numeroContato = document.createElement('p')

divCardContato.classList.add('card-contato')

imagemContato.src = contato.foto
imagemContato.onerror = () => {
    imagemContato.src = './img/avatar1.avif'
}

if (contato.nome) {
    nomeContato.textContent = contato.nome
  } else {
    nomeContato.textContent = 'Nome desconhecido'
  }

if (contato.celular) {
    numeroContato.textContent = contato.celular
  } else {
    numeroContato.textContent = 'Numero desconhecido'
  }
  

container.appendChild(divCardContato)
divCardContato.append(imagemContato, nomeContato, numeroContato)

return container
}

async function carregarContatos() {
    const contatos = await lerContatos()
    contatos.forEach(criarContatos)
}

const buttonNovoContato = document.getElementById('novo-contato')

function abrirTelaCadastro() {
    const main = document.querySelector('main')

    main.classList.remove('card-show')
    main.classList.add('form-show')

    document.getElementById('cancelar').addEventListener('click', fecharTelacadastro)

}
buttonNovoContato.addEventListener('click', abrirTelaCadastro)

function fecharTelacadastro() {
    const main = document.querySelector('main')

    main.classList.remove('form-show')
    main.classList.add('card-show')
}

carregarContatos()