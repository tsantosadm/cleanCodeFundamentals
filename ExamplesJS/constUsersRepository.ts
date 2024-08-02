//O que é esse data ?? (sempre Receber e Enviar parâmetros Nomeados, usando a Desestruturação)
const usersRepository = {
    create(data){
        //cria o usuário (name, user, password)
        const user = createUserOnDataBase()

        //Sem Desestruturação
        return user

        //Com Desestruturação
        return {
            user,
        }
    }
}