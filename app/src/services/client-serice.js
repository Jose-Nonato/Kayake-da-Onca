const listaClientes = () =>{
    return fetch(`http://localhost:4000/user`)
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

export const clientService ={
    criaCliente,
    listaClientes
}