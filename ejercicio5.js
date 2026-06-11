//funciones o metodos -- son bloques de codigo reutilizable que realizan tarea especifica

const numero_1 = 8
const numero_2 = 4
const numero_3 = 3
const numero_4 = "5"

const suma1 = suma(numero_1, numero_2)
console.log(suma1)

console.log(suma(numero_3, numero_4))

function suma(num1,num2){
    return parseInt(num1) + parseInt(num2)
}