/*● Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)*/

const prompt = require ('prompt-sync')();

let nombres = [];

for (i = 1 ; i <= 5; i++){
    let nombre = prompt("Ingrese un nombre: ");

    nombres[i] = nombre; 
}

let buscardor = prompt ("Que nombre esta buscando: ")

for( i= 1 ;  i < nombres.length; i++){

    if (nombres[i] === buscardor){
        console.log("El nombre que buscaba es: " + nombres[i]+ ", en la posicion " + i );
    }
}