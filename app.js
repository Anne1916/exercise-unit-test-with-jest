//Declaramos la función con el nombre exato "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    //convertimos valor en dólares
    let valueInDollar = valueInEuro * 1.07
    //retornamos valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let euro = valueInDollar / 1.07;
    let valueInYen = euro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let euros = valueInYen / 156.5;
    let pounds = euros * 0.87;
    return pounds;
}

const sum = (a, b) => {
    return a + b
}

console.log(sum(7,3))
//se eincluye la función en el exports para exportarla
//a otros archivos, en este caso test.js
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
