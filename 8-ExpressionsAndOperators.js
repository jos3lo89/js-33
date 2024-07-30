/* Conditional Operators */
console.log(true ? "es verdadero" : "el falso");

/* Arithmetic Operators */
console.log(`Suma -> ${5 + 5}`);
console.log(`Resta -> ${5 - 5}`);
console.log(`Multiplicación -> ${5 * 5}`);
console.log(`División -> ${5 / 5}`);
console.log(`Potencia -> ${5 ** 5}`);
console.log(`Modulo - residuo -> ${5 % 5}`);
let a = 1;
console.log(`Incremento -> ${++a}`); // 2
console.log(`Decremento -> ${--a}`); // 1

/* Logical Operators */

let c = true;
let d = false;

console.log(
  `OR - || -> ${c || d ? "c o d es verdadero" : "c y d no son verdaderos"}`
);

console.log(
  `AND - && -> ${c && d ? "c y d son verdaderos" : "c y d no son verdaderos"}`
);

console.log(
  `NOT - ! -> ${
    !d ? "d era falso y lo negamos" : "solo si el resultado es true"
  }`
);

console.log(`?? -> ${null  ?? "en Null o undefined"}`);
