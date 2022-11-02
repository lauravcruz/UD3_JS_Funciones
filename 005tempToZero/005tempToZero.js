"use strict";
/*005tempToZero.js/.html: Crear una función temporizador que reciba como parámetro 
los minutos y segundos de duración de éste, de modo, que cada segundo mostrará por 
consola el tiempo que le queda al temporizador hasta llegar a 0. La función recibirá dos 
parámetros, con los minutos y los segundos, pero en el caso que sólo le pasemos un 
parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás. 
Por ejemplo:
temporizador(77); // le pasamos 77 segundos
temporizador(2,50); // le pasamos 2 minutos y 50 segundos*/

temporizador(30, 1);

function temporizador(s, m = 0) {
  //Convertimos minutos en segundos
  s += m * 60;
  //Con setInterval: mostramos (y restamos) los segundos restantes. Va a aparecer cada 1000 milisegundos (último argumento del setInverval)
  let milsec = setInterval(function () {
    console.log(s);
    s--;
    if (s == 0) {
      //Salimos cuando llegue a 0
      clearInterval(milsec);
    }
  }, 1000);
}
