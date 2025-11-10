'use strict'

import { criarContato, lerContatos } from "./contatos.js"

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

function telaCadastro() {
    const main = document.querySelector('main')

    main.classList.remove('card-show')
    main.classList.add('form-show')

    document.getElementById('cancelar').addEventListener('click', fecharTelacadastro)
    document.getElementById('salvar').addEventListener('click', cadastrarNovoContato)

}
buttonNovoContato.addEventListener('click', telaCadastro)

function fecharTelacadastro() {
    const main = document.querySelector('main')

    main.classList.remove('form-show')
    main.classList.add('card-show')
}

async function cadastrarNovoContato() {
    // const foto = document.getElementById('foto').value
    const foto = 'https://cdn.wikimg.net/en/hkwiki/images/e/e6/B_Lace.png' //Imagem de teste
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const celular = document.getElementById('celular').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value
    
    const novoContato = { nome, celular, foto, email, endereco, cidade }

    const success = await criarContato(novoContato)

    if (success) {
        alert('Contato cadsatrado com sucesso!')
        fecharTelacadastro()
    } else {
        alert('Erro ao criar contato')
    }
}

carregarContatos()