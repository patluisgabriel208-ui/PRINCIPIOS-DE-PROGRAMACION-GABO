let producto1 = "Pintura Blanca";
let precio1 = 320;
let stock1 = 12;

let producto2 = "Pintura Azul";
let precio2 = 350;
let stock2 = 9;

let producto3 = "Pintura Roja";
let precio3 = 400;
let stock3 = 7;

let valorTotal = (precio1 * stock1) + (precio2 * stock2) + (precio3 * stock3);

console.log("=== SISTEMA BÁSICO DE INVENTARIO ===");

console.log("Producto 1 registrado:", producto1);
console.log("Precio unitario del producto 1: $" + precio1);
console.log("Unidades disponibles del producto 1:", stock1);

console.log("Producto 2 registrado:", producto2);
console.log("Precio unitario del producto 2: $" + precio2);
console.log("Unidades disponibles del producto 2:", stock2);

console.log("Producto 3 registrado:", producto3);
console.log("Precio unitario del producto 3: $" + precio3);
console.log("Unidades disponibles del producto 3:", stock3);

console.log("Valor total del inventario: $" + valorTotal);
