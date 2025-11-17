'use strict'

import { criarContato, lerContatos } from "./contatos.js"

// console.log(await lerContatos())

function pegarContatos(contato) {
  const container = document.getElementById('container')

  const divCardContato = document.createElement('div')
  const imagemContato = document.createElement('img')
  const nomeContato = document.createElement('h2')
  const numeroContato = document.createElement('p')

  divCardContato.classList.add('card-contato')


  imagemContato.src = container.foto
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

  divCardContato.addEventListener('click', () => {
    editarContato(contato)
  })

  return container
}

async function carregarContatos() {
  const contatos = await lerContatos()
  contatos.forEach(pegarContatos)
}

const buttonNovoContato = document.getElementById('novo-contato')

function telaCadastro() {
  const main = document.querySelector('main')

  main.classList.remove('card-show')
  main.classList.add('form-show')

  const btnCancelar = document.getElementById('cancelar')
  const btnSalvar = document.getElementById('salvar')
  const btnEditar = document.getElementById('editar')
  const btnDeletar = document.getElementById('deletar')

  btnCancelar.addEventListener('click', fecharTelacadastro)

  btnSalvar.addEventListener('click', cadastrarNovoContato)

  btnEditar.disabled = true
  btnEditar.classList.add('buttonDisabled')

  btnDeletar.disabled = true
  btnDeletar.classList.add('buttonDisabled')

}
buttonNovoContato.addEventListener('click', telaCadastro)

function fecharTelacadastro() {
  const main = document.querySelector('main')

  main.classList.remove('form-show')
  main.classList.add('card-show')
}

async function cadastrarNovoContato() {
  const foto = document.getElementById('foto').value
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

function editarContato(contato) {
  const main = document.querySelector('main')

  main.classList.remove('card-show')
  main.classList.add('form-show')

  const foto = document.getElementById('foto')
  const nome = document.getElementById('nome')
  const email = document.getElementById('email')
  const celular = document.getElementById('celular')
  const endereco = document.getElementById('endereco')
  const cidade = document.getElementById('cidade')

  foto.value = contato.foto || "" //Não está da maneira correta
  nome.value = contato.nome || ""
  email.value = contato.email || ""
  celular.value = contato.celular || ""
  endereco.value = contato.endereco || ""
  cidade.value = contato.cidade || ""


  foto.disabled = true
  nome.disabled = true
  email.disabled = true
  celular.disabled = true
  endereco.disabled = true
  cidade.disabled = true


  const btnCancelar = document.getElementById('cancelar')
  const btnSalvar = document.getElementById('salvar')
  const btnEditar = document.getElementById('editar')
  const btnDeletar = document.getElementById('deletar')

  btnCancelar.addEventListener('click', fecharTelacadastro)

  btnSalvar.addEventListener('click', cadastrarNovoContato)
  btnSalvar.disabled = true
  btnSalvar.classList.add('buttonDisabled')

  btnEditar.addEventListener('click', () => {
    foto.disabled = false
    nome.disabled = false
    email.disabled = false
    celular.disabled = false
    endereco.disabled = false
    cidade.disabled = false
  })

}

carregarContatos()