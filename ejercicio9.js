const prompt = require('prompt-sync')();
const semanas = 4;
const dias = 7;


let gastos = [];
for (let i = 0; i < semanas; i++) {
  gastos[i] = [];
  for (let j = 0; j < dias; j++) {
    let gastoDiario = prompt(`Ingrese el gasto de la semana ${i + 1}, día ${j + 1}: `);
    gastos[i][j] = parseFloat(gastoDiario);
  }
} 


function totalGastosSemana(matriz, semana) {
    
    let total = 0;
    let fila = semana - 1; 
    for (let j = 0; j < matriz[fila].length; j++) {
        total += matriz[fila][j];
    }
    return total;
}

let semana = parseInt(prompt("Ingrese el número de semana que quiera consultar los gastos (1 a 4): "));
console.log(`El total de gastos de la semana ${semana} es: ${totalGastosSemana(gastos, semana)}`);


function totalGastosDia(matriz, dia) {
    
    let total = 0;
    let columna = dia - 1; 
    for (let i = 0; i < matriz.length; i++) {
        total += matriz[i][columna];
    }
    return total;
}

let dia = parseInt(prompt("Ingrese el número de día que quiera consultar los gastos del mes (1 a 7): "));
console.log(`El total de gastos en el mes para el día ${dia} es: ${totalGastosDia(gastos, dia)}`);


function totalGastosMes(gastos) {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        for (let j = 0; j < gastos[i].length; j++) {
            total += gastos[i][j];
        }
    }
    return total;
}

console.log(`El total de gastos del mes es: ${totalGastosMes(gastos)}`);



function semanaConMasGastos(matriz) {
    let maxSemana = 0;
    let maxGasto = 0;
    for (let i = 0; i < matriz.length; i++) {
        let totalSemana = totalGastosSemana(matriz, i + 1);
        if (totalSemana > maxGasto) {
            maxGasto = totalSemana;
            maxSemana = i + 1;
        }
    }
    return maxSemana;
}

console.log(`La semana con más gastos fue la semana ${semanaConMasGastos(gastos)}`);