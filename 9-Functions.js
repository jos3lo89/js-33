/* Functions */

function hello() {
  console.log("Hola mundo desde un funcion");
}

hello();

const hola = () => {
  console.log("Hola mundo desde una funcion flecha");
};

hola();

/* Parametro en un funcion */

function add(x, y) {
  return x + y;
}
console.log(add(5, 5));

const resta = (x, y) => {
  return x - y;
};
console.log(resta(5, 5));

/* Pamametros  por defecto */
function multi(x = 5, y = 10) {
  return x * y;
}

console.log(multi()); // 50

/* IIFE funciones ejecutadas inmediatamente */

(function () {
  console.log("IIFE 1 -> se ejecuta inmediatemnete despues de su creación");
})();

(() => {
  console.log("IIFE 2 -> se ejecuta inmediatemnete despues de su creación");
})();

/* funciones integradas --- metodos */

"hola".toUpperCase();
"hola".split("o");

let numero = 33;
numero.toString();

[1, 2, 3, 4, 4].length();
