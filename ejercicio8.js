/*● Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el
método “push” en los Arrays.*/


let matriz =[];
for (let i = 0; i < 10; i++) {
    matriz[i] = [];   
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = i * 10 + j + 1; 
    }
}

console.log(matriz);

function sumarDiagonalRoja(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma+= matriz[i][i];
        
    }
    return suma;
}

function marcaDiagonalVerde(matriz){
    let valores = [];
    for (let i = 0; i < matriz.length; i++) {
        valores.push(matriz[i][matriz.length - 1 - i]);
        
    }

    return valores;
}

function sumarDiagonalVerde(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {

        suma += matriz[i][matriz.length - 1 -i];
    }

    return suma;
}

function resultado ( matriz){
    let resultadoRojo = sumarDiagonalRoja(matriz);
    let resultadoVeede = sumarDiagonalVerde(matriz);

    console.log( "Resultado diagonal ROJO: ", resultadoRojo);
    console.log( "Resultado diagonal VERDE: ", resultadoVeede);
}

resultado(matriz);