//Variables names

const users = ["Talisson", "Karoline", "Phietro"]

// Error
const filtered = users.filter(u => {
    return u.startsWith('T')
})

//Correct
const usersStartingWithLetterT = users.filter( user => {
    return user.startsWith('T')
})

// ===========================================

// Avoid generics names (data, response, list, args, params)
// Erros

function getUsers(){
    const data = getUsersFromDatabase()

    // validations
    // data manipulations (mapping)


    return data
}

fuction getCompanies(){
    const data = getUsersFromDatabse()

    return data
}


// Open file ExampleGenericsNames.ts for analytics the variables Incorrects names

// Open file blockeds-date.ts for analytics the variables corrects names

