module.exports = { convertir: function(numero)  {
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
}
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
