const numberInString = '12345'

// Converter para Número
const number = +numberInString // Funciona, mas não é viável, pois não é legível facilmente
const number2 = parseInt(numberInString) // Funciona também, até melhorou a legibilidade, porém converte apenas para inteiro
const number3 = Number(numberInString) // funciona também, muito melhor! É o mais convencional entre a comunidade DEV

// Saber se o número existe
const isNumberNotNull = !!number // Funciona? Sim, porém não é entendível nem legível, converte para Boolean
const isNumberNotNull2 = Boolean(number) // Bem melhor com o contrutor da próproa biblioteca

// Converter para String
const numberAsString = `${number}` //Funciona também, mas não é o ideal
const numberAsString2 = String(number) // Usando o construtor fica muito melhor de entender
