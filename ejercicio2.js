/* Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese
la correcta. La contraseña correcta es "1234".*/

const prompt = require ('prompt-sync')();

let contraseña = parseInt(prompt ("Ingrese su contraseña "));


do {
    contraseña = parseFloat(prompt("Contraseña incorrecta --- Ingrese una nueva contraseña: "));
} while (contraseña != 1234);

console.log("Ingreso EXITOSO")