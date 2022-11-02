"use strict";
/*007rewriteWithArrowFunction.js/.html: Reemplace las expresiones de función con 
funciones de flecha en el código a continuación:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);*/

//La función arrow simplifica la estructura:
let confirmacion = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

confirmacion(
  "Estás de acuerdo?",
  //Aunque las funciones no reciban argumentos deben mantenerse los paréntesis:
  () => {
    alert("You agreed");
  },
  () => {
    alert("You canceled the execution.");
  }
);
