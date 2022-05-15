const listaClientes = (type) =>{
    return fetch(`http://localhost:4000/${type}`)
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível listar os clientes")
    })
}

const criaCliente = (nome, senha, email) =>{
    return fetch(`http://localhost:4000/user`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            senha: senha,
            email: email

        })
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possível criar o clientes")
        
    })
}

const removeCliente = (id) =>{
    return fetch(`http://localhost:4000/cart/${id}`, {
        method: 'DELETE'    
    }).then(resposta =>{
        if(!resposta.ok){
            throw new Error("Não foi possível listar os clientes")
        }
    })
}

const adicionarItem = (itemNome, preco) =>{
    return fetch(`http://localhost:4000/cart`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: itemNome,
            preco: preco

        })
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possível criar o clientes")
        
    })
}
    
export const clientService = {
    criaCliente,
    listaClientes,
    removeCliente,
    adicionarItem
}