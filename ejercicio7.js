/*● Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
números enteros y positivo. Luego, escribe un algoritmo para sumar todos
los números en la matriz.*/

let matrizDuNum=[
[1, 2, 3, 4, 5],
[4, 8, 16, 24, 28],
[6, 12, 18, 30, 36],
[7, 14, 21, 28, 35],
[9, 37, 45, 55, 91]
];

let contenedorMatriz=[];

let suma=0; 

console.log( "La matriz contiene los siguientes NUMEROS Z");

for(let i=0; i< matrizDuNum.length; i++){
  
    for(let j=0; j< matrizDuNum[i].length; j++){
    
        contenedorMatriz.push(matrizDuNum[i][j]);
    
        suma = suma + matrizDuNum[i][j]; 
  }
}
console.log(contenedorMatriz); 
console.log("La suma de los Números Z es: " + suma);