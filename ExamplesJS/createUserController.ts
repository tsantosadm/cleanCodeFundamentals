//O que é esse data ?? (sempre Receber e Enviar parâmetros Nomeados, usando a Desestruturação)
function createUserController(data){
    //Usando a desestruturação
    const {name, email, password} = data

    usersRepository.create({
        name, email, password
    })
}


