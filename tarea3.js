console.log("=== NÚMEROS PARES DEL 1 AL 20 ===");

for (let numero = 1; numero <= 20; numero++) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

console.log(" ");

console.log("=== NÚMEROS IMPARES DEL 1 AL 20 ===");

for (let numero = 1; numero <= 20; numero++) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}

console.log(" ");

console.log("=== NÚMEROS PRIMOS DEL 1 AL 20 ===");

for (let numero = 2; numero <= 20; numero++) {

    let esPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(numero);
    }
}