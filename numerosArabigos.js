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