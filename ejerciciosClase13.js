/*Ejercicio 1*/
let base = 10;
let altura =15; 

function calcularArea (base, altura){
   
   return (base * altura) / 2;
}



let area = calcularArea(base, altura);
console.log("El area es " + area);

/* Ejercicio 2*/

let encontrarMayor = function (numeroA, numeroB){
   if (numeroA > numeroB)
   {
    return numeroA;
   } else
   {
    return numeroB;
   }
}

console.log(encontrarMayor(10,15));

/*Ejercicio 3*/

let saludoGlobal = "Hola, desde el scope global";

function mostrarMensaje (){
    let saludoLocal = "Hola, desde el scope local"
    console.log(saludoGlobal + " // " + saludoLocal);
    
}

mostrarMensaje();

/*Ejercicio 4*/

function esPar (numero){
    let resultado;
    if (numero % 2 == 0) {
     resultado = "El número es par"   
    } else{
    resultado= "El número es impar"
    }
    
   return resultado; 
}

console.log(esPar(3));

/*Ejercicio 5*/

let concatenarNombres = function (nombre, apellido){
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}

console.log(concatenarNombres("Yanet", "Montoya"));

/*Ejercicio 6*/

function convertirHorasAMinutos (horas){
    return horas * 60;
}

console.log(convertirHorasAMinutos(3));

/*Ejercicio 7*/

let horaActual = 12;

function mostrarSaludo (){
    
    if (horaActual < 12){
        return  "Buenos días";
    } else if  (horaActual < 18) {
            return "Buenas tardes";
            } else {
                return "Buenas noches"; 
            }
        
    
 }
    
 console.log(mostrarSaludo());

 /*Ejercicio 8*/

 let convertirCelsiusAFarenheit = function (celsius){
    
    return (celsius * 1.8 ) + 32;
}

console.log(convertirCelsiusAFarenheit(2));

/*Ejercicio 9*/

function contarHasta (num){
    for (let i = 1; i <= num; i++){
      console.log(i);  
    }
}

contarHasta(4);

/*Ejercicio 10*/