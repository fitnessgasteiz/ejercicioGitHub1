//For . Recuerda break; ó continue; si lo necesitas incluir en un for.
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

for (i=0; i < dias.length; i++) {
    console.log(dias[i]);
}

//Factorial de un numero n 5x4x3x2x1
let n=5;
let resto=1;
for (var i=1; i <= n ; i++){
 console.log(resto *= i );
}

//For in -Para recorrer 
//todos los elementos de un Array mejor con For in
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

for (i in dias) {
    console.log(dias[i]);
}

//Funciones
function calculaPrecio(precio){
    let impuesto = 1.16;
    let gastosEnvio = 10;
    let precioTotal = (precio * impuesto) + gastosEnvio;
    return precioTotal;
}
let precioTotal = calculaPrecio(23.34);
console.log(precioTotal);

//Funcion pasamos un entero y devuelve un string
function parOImpar(numero) {
 
    if (numero%2 == 0 ){
        console.log("El numero es par");
    }else {
        console.log("El numero es impar");
    }
}
parOImpar(4);

//Definir si una cadena de texto tiene mayusculas o no

function tipo(cadenaTexto){
    var resultado = "La cadena" + (cadenaTexto);
    if (cadenaTexto == cadenaTexto.toUpperCase()){
        resultado = "contiene Mayúsculas";
    }else if(cadenaTexto == cadenaTexto.toLowerCase()) {
        resultado = "no contiene Mayúsculas";
    }else {
        resultado = "contiene mayúsculas y minúsculas";
    }
    console.log(resultado);
}
tipo("Hola amigos.");

//While (mientras se cumpla la condición) 
//Sumar hasta 100
let resultado= 0;
let numero = 100;
var i = 0;
while (i <= numero) {
    resultado += i;
    i++
}
console.log(resultado);

//Do While (Igual que While pero al menos 
//ejecutan las instrucciónes al menos una vez.)
//Vamos a calcular el factorial de un número
let resultado1= 1;
let numero1 = 5;

do {
    resultado1 *= numero1;
    numero1--;
}while(numero1>0);

console.log(resultado1);

//Switch
switch (variable) {
    case 1:
    ...
    break;
    case 2:
    ...
    break;
}