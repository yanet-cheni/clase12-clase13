/*Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén
por encima o sean iguales a 10, pero menores que 1000.*/

let matriz = [
   [10 , 3, 2, 1, 4, 7 ],
   [5, 5, 10, 100, 4],
   [5, 125, 10, 1020, 4],
   [5, 5, 5097, 100, 4]
];

 
let suma = [0][0];

for (fila= 0 ; fila < matriz.length ;  fila++){

  for(colum = 0; colum < matriz.length; colum++ ){
    
    if(matriz[fila][colum] >= 10 && matriz[fila][colum] < 1000){
        
        suma = suma + matriz[fila][colum];
        console.log(matriz[fila][colum] );

    }
}

}

console.log( "El total de la suma es: " +  suma );