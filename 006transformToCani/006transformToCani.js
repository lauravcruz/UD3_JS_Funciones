"use strict";
/*006transformToCani.js/.html: Crear una función que reciba una cadena y la devuelva 
transformada en Cani. Por ejemplo, si le pasamos a la función la cadena "una cadena 
cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". Para ello, hay 
que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir 
tres letras H al final. */

let frase = prompt("Introduzca una frase para volverla cani");

document.write(canizador(frase));

function canizador(frase) {
  frase = frase.toLowerCase();
  //reemplazamos todas las c por k. G hace referencia a "global": todas las que encuentre
  frase = frase.replace(/c/g, "k");

  let fraseCani = "";
  for (let i = 0; i < frase.length; i++) {
    //Si la posición es par, ponemos el caracter en mayúscula para alternar uno sí y uno no
    i % 2 == 0
      ? (fraseCani += frase[i].toUpperCase())
      : (fraseCani += frase[i]);
  }
  return fraseCani + "HHH";
}
