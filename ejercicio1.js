/*Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente
hasta que el usuario ingrese un número negativo. Luego, imprime la suma
de todos los números ingresados.*/

const prompt = require('prompt-sync')(); 

let numero = parseFloat(prompt("Ingrese un número: "));

let suma = 0;

while (numero >= 0) {
    
    suma += numero;

    numero = parseFloat(prompt("Ingrese un número: "));
   
}

console.log("La suma es " + suma);
