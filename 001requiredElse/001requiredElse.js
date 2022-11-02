"use strict";
/* 001requiredElse.js/.html: ¿Es "else" requerido?
La siguiente función devuelve true si el parámetro age es mayor a 18. De lo contrario, 
solicita una confirmación y devuelve su resultado:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?');
  }
}
¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en 
el comportamiento de estas dos variantes?*/

//El funcionamiento será el mismo porque si no entra en el if se ejecuta la siguiente línea (el return que estaba dentro de else).
//En caso de entrar en el if, en cuanto encuentra el return se sale de la función. Vamos a comprobarlo:

let age = prompt("Introduzca su edad");
document.write(checkAge(age));

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("¿Tus padres te permitieron?");
}
