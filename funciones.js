const num1 = document.querySelector("#numero_1")
const num2 = document.querySelector("#numero_2")
const buttonSuma = document.querySelector("#btnSuma")
const buttonResta = document.querySelector("#btnResta")
const buttonMultiplica = document.querySelector("#btnMultiplica")
const buttonDivide = document.querySelector("#btnDivide")
const resultado = document.querySelector("#resultado")

buttonSuma.addEventListener("click", () => {
    const res = suma(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
})

buttonResta.addEventListener("click", () => {
    const res = resta(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
})

buttonMultiplica.addEventListener("click", () => {
    const res = multiplica(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
})

buttonDivide.addEventListener("click", () => {
    const res = divide(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
})

function suma(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function resta(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function multiplica(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function divide(a, b) {
    const divisor = parseFloat(b)
    if (divisor === 0) {
        return "No se puede dividir entre 0"
    }
    return parseFloat(a) / divisor
}

function limpiar(num1, num2) {
    num1.value = ""
    num2.value = ""
}
