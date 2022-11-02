"use strict";
/*003minimize.js/.html: Función min(a, b)
Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
Por ejemplo:*/

document.write(min(2, 5) + "<br>"); // 2
document.write(min(3, -1) + "<br>"); // -1
document.write(min(1, 1) + "<br>"); // 1

function min(a, b) {
  return a < b ? a : b;
}
