const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingresa un número: ', (num) => {
    const numero = parseInt(num)
    rl.question('Ingrese otro número: ', (num2) => {
        const numero2 = parseInt(num2)
        console.log(`La suma de ${numero} y ${numero2} es: ${suma(numero, numero2)}`)
        rl.close()
    })
})

function suma (num1, num2) {
    return parseInt(num1) + parseInt(num2)
}