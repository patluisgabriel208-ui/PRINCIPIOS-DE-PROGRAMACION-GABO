const numeroInput = document.querySelector("#numero");
const btnClasificar = document.querySelector("#btnClasificar");
const resultado = document.querySelector("#resultado");

btnClasificar.addEventListener("click", () => {
  const n = parseInt(numeroInput.value);

  if (isNaN(n)) {
    resultado.textContent = "Ingresa un número válido";
    return;
  }

  const parOImpar = n % 2 === 0 ? "par" : "impar";
  const primoONo = esPrimo(n) ? "primo" : "no primo";

  resultado.textContent = `El número ${n} es ${parOImpar} y ${primoONo}`;
});

function esPrimo(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}