// Avoid denails whenever possible

//Negação dentro de Ifs
//Incorrect
const isUserOlderThan18Years = true
const isUserLivesOnBrazil = true

//Correct (Whenever possible, write withou negation)
const  isUserYoungThan18Years = true
const isUserLivesOutBrazil = true

//Incorrect
if (!isUserOlderThan18Years && !isUserLivesOnBrazil){}

//Correct 
if (isUserYoungThan18Years && isUserLivesOutBrazil) {}

// ====================================================== //

// Early return vs else ...

// normal with else
function isUserOlderThan18Years(user){
    if(!user){
        return { error: true}
    } else {
        return user.age >= 18
    }
}

// with early return..
function isUserOlderThan18(user){
    if(!user){
        return { error: true}
    }
    return user.age >= 18
}

// Avoid nested conditionals whenever possible (dentro de outras com ternários)

//Incorrect 
user.age >= 18 ? user.age === 18 ? : 'idade' : 'pessoa'
//or other Incorrect
if (user.age > 18){
    if(isMaior){
        if(isStudent)
    }
}

// Correct 
if(user.age >= 18 && isMaior && isStudent){
    return;
}

//Or other correct
if (user.age >= 18){
    return
}
if (user.age === isMaior){
    return
}
if (user.age === isStudent){
    return
}


