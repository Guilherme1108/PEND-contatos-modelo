export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'

    const response = await fetch (url)

    const contatos = await response.json()

    return contatos
}

export async function criarContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deletarContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.ok
}

async function atualizarContato(id, contato) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)


    return response.ok
    
}

const novoContato = {
    "nome": "Guilherme Moreira",
    "celular": "11 9 4002-8922",
    "foto": "semFoto.png",
    "email": "guilherme.moreira@gmail.com",
    "endereco": "Av. Estrada bela, 333",
    "cidade": "Jandira"
}

criarContato()
// lerContatos()