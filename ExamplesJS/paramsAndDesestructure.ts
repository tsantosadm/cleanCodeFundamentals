//Rota para criação de usuário (name, email, password)
//Controller (name, email, password)
//Repository (name, email, password)

//O que é esse body ?? (sempre Receber e Enviar parâmetros Nomeados, usando a Desestruturação)
function createUserRoute(body, params){
    //validações

    //Usando Desestruturação
    const {name, email, password} = body
    createUserController({
        name, email, password
    })
}

//http://localhost:3000/users/3 = params
createUserRoute({name, email, password}, {id: 1})
//O que é esse Null (nulo)?? O que é esse Id: 1?? Não saberemos
createUserRoute(null, {id: 1}) //Forma totalmente estranha, errado de se fazer.

//usando a Desestruturação de forma correta e assertiva
createUserRoute({
    body: {name, email, password},
    params: {id: 1}
})

//Pode passar somente o que desejar agora!
createUserRoute({
    params: {id: 1}
})
