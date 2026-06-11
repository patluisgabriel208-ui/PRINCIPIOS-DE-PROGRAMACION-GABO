const num1 = document.querySelector("#numero_1")
const num2 = document.querySelector("#numero_2")
const buttonSuma = document.querySelector("#btnSuma")
const resultado = document.querySelector("#resultado")

buttonSuma.addEventListener("click", () => {
    const res = suma(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
})

function suma(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function limpiar(num1, num2) {
    num1.value = ""
    num2.value = ""
}
