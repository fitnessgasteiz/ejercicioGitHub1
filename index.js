// //Ejercicio 1
var convertirNumerosRomanos = require("./numerosRomanos");
num = 75;
let resultado = "";

if (num < 0 || num > 100) {
    resultado = resultado + "El número tiene que estár entre 0 y 100";
}else if (num%3 == 0 && num%5 == 0){
    resultado = resultado +  "Foo Quix";
}else if (num%3 == 0 && num%7 == 0){
    resultado = resultado + "Foo Quix";
}else if (num%5 == 0 && num%7 == 0){
    resultado = resultado + "Bar Quix";
}else if (num%3 == 0 && num%5 == 0 && num%7 == 0){
    resultado = resultado + "Foo Bar Quix";
}else if (num%3 == 0){
    resultado = resultado + " Foo";
}else if (num%5 == 0){
    resultado = resultado + " Bar";
}else if (num%7 == 0){
    resultado = resultado + " Quix";
}else{
    resultado = resultado + num;
}
let cadena = num.toString();
for (let i= 0; i < cadena.length ; i++) {
    switch (cadena [i]) {
        case "3":
        resultado = resultado +" Foo";
            break;
        case "5":
        resultado = resultado +" Bar";
            break;
        case "7":
        resultado = resultado +" Quix";
            break;
    }
}
console.log(resultado);







// Ejercicio 2 NUMEROS ROMANOS
// let I = 1;
// let V = 5;
// let X = 10;
// let L = 50;
// let C = 100;
// let D = 500;
// let M = 1000;
// let numeroRomano = ["I","V","X","L","C","D","M"];

// let number; 
// function deArabeaRomano (1) {
//     if (number === 1) {
//     return "I";
//     }
//     else if (number === 2) {
//         return "II"
//     }else if (number ===3) {
//         return "III"
//     }else if (number ===4) {
//         return "IV"
//     }else if (number ===5) {
//         return "V"
//     }else if (number ===6) {
//         return "VI"
//     }else if (number ===7) {
//         return "VII"
//     }else if (number ===8) {
//         return "VIII"
//     }else if (number ===9) {
//         return "IX"
//     }else if (number ===10) {
//         return "X"
//     }

// }


// let numeroRomano = ["I","V","X","L","C","D","M"];
// let numerosArabes = [1,2,3,4,5,6,7,8,9,10,50,100,500,1000];
// let num = 1;
// function cambio(){
//     if (num == numerosArabes[0]) {
//     return numerosRomano[0]
// }
// }
// cambio();

//OPCION NUMEROS ROMANOS FOR

// let numeroRomano = ["I","V","X","L","C","D","M"];
// let numerosArabes = [1,2,3,4,5,6,7,8,9,10,50,100,500,1000];
// let num2 = 13;
// for (num2=0; num2 == numeroRomano[0]; num2++) {
//     console.log(numerosRomano[0]);
// }
// console.log(num2);

//OPCION NUMEROS ROMANOS SWITCH
// let numeroRomano = ["I","V","X","L","C","D","M"];
// let numerosArabes = [1,2,3,4,5,6,7,8,9,10,50,100,500,1000];
// let num2 = 13;
// switch (numeros) {
//     case 1:
//        if (num2 = numerosArabes.some) {
//             console.log(numeroRomano[some]);
//         }
// }
// numeros();
let dicRomano = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}
// function romanoArabe(numeroRomano) {
  
//     //pasamos numero a cadena
//     cadenaNumeroRomano = numeroRomano.toString();
//     for  (let i=0 ; i < cadenaNumeroRomano.length; i++ ) {
//         let valorActual = dicRomano[cadenaNumeroRomano[i]];
//         let z = i+1;
//     for ( ; z < cadenaNumeroRomano.length && valorActual <= dicRomano[cadenaNumeroRomano[z]]; z++){

//     }
//     if ( dicRomano[cadenaNumeroRomano[i]] != dicRomano[cadenaNumeroRomano[z]] && i == z+1 ) {

//     }
//     }
//     if (numeroRomano < 0 || numeroRomano >= 3999){
//         console.log("Número no válido, debe estár entre 0 y 3999");
//     }
// }
// romanoArabe(65);
function convertirArabigoRomano (numero)  {
    var i, miles, centenas, decenas, unidades;
    var romano = "";
   //obtenemos cada cifra del número
    miles = numero / 1000;
    centenas = numero / 100 % 10;
    decenas = numero / 10 % 10;
    unidades = numero % 10;

   //millar
    for (i = 1; i <= miles; i++) {
           romano = romano + "M";
    }

   //centenas
    if (centenas == 9) {
        romano = romano + "CM";
    } else if (centenas >= 5) {
                   romano = romano + "D";
                   for (i = 6; i <= centenas; i++) {
                          romano = romano + "C";
                   }
    } else if (centenas == 4) {
                    romano = romano + "CD";
    } else {
                for (i = 1; i <= centenas; i++) {
                       romano = romano + "C";
                }
    }

   //decenas
    if (decenas == 9) {
         romano = romano + "XC";
    } else if (decenas >= 5) {
                    romano = romano + "L";
                    for (i = 6; i <= decenas; i++) {
                          romano = romano + "X";
                    }
    } else if (decenas == 4) {
                    romano = romano + "XL";
    } else {
                  for (i = 1; i <= decenas; i++) {
                         romano = romano + "X";
                  }
    }

   //unidades
    if (unidades == 9) {
         romano = romano + "IX";
    } else if (unidades >= 5) {
                    romano = romano + "V";
                    for (i = 6; i <= unidades; i++) {
                           romano = romano + "I";
                    }
    } else if (unidades == 4) {
                    romano = romano + "IV";
    } else {
                for (i = 1; i <= unidades; i++) {
                       romano = romano + "I";
                }
    }
    return romano;
}
console.log(convertirArabigoRomano(5));

function convertirRomanoAArabigo(romano)
{
    let Rom= [' ','I','V','X','L','C','D','M']; //GUARDAN LETRAS A COMPARAR
    let valor = [0,1,5,10,50,100,500,1000];//SE LE DA VALOR A LA LETRAS
    let ant = 0;

    let suma = 0;
    let letra = ' ';

    for(let i = 0; i < romano.length; i++){//RECORRER TODA LA FRASE(numero romano)
        letra = romano[i];
        for(let j = 0; j < Rom.length; j++){//RECORRE ARREGLO ROM
            if(letra == Rom[j]){//si letra recorrida = a letra contenida en rom                 
                suma = suma + valor [j]; //sumar el valor de la letra
                if( ant < valor[j]){ //si el valor de letra anterior menor a valor letra   //actual
                    suma = suma - ant*2 ; // restale el doble del menor de los dos
                    ant = valor[j]; // valor anterior = valor letra actual
                }else {//si no se cumple lo anterior  
                    ant = valor[j];//el dato actual se guarda en anterior

                }

            }              
        }
    }
    return suma;
}

console.log(convertirRomanoAArabigo('XIX'));