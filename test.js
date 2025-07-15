//Importar la función sum del archivo3 app.js
const { sum } = require('./app.js')
//Comienza la primera prueba
test('adds 14 + 9 to equal 23', () => {
    //Dentro de la prueba se llama a la función sum 
    //con 2 números
    let total = sum(14, 9)
    //Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23)
})

test("One euro should be 1.07 dollars", function(){
    //Se importa función desde app.js
    const { fromEuroToDollar } = require('./app.js')
    //Se usa la función
    const dollars = fromEuroToDollar(3.5)
    //Si un Euro son 1.07 dólares, entonces 3.5 Euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07
    //Hace comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745)
    //1 euro son 1.07 dólares, 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;

    expect(yens).toBeCloseTo(expected);
})

test("One yen should be 0.87 british pound", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(1)
    const expected = (1 / 156.5) * 0.87

    expect(pounds).toBeCloseTo(expected)
})