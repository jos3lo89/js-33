/* Conversión de tipos */

let letra = "33" + 33;
console.log(letra); // "3333"

const numero = Number("0x11");
console.log(numero); // 17

let y = "5"; // y is a string
let x = +y; // x is a number

console.log(typeof x, `  ${x}`);

console.log(typeof String(33 + 2)); // hace la operacion y convierte en str

let press = (3.33333333).toPrecision(3);
console.log(press);

/* conversion automatica  */

5 + null; // returns 5         Porque nulo se convierte a 0
"5" + null; // returns "5null"   Porque nulo se convierte en "nulo"
"5" + 2; // returns "52"      porque 2 se convierte en "2"
"5" - 2; // returns 3         porque "5" se convierte en 5
"5" * "2"; // returns 10        porque "5" y "2" se convierten en 5 y 2

/* conversion explicito */

// Number()
// String()
// parseFloat()
// parseInt()


Number("33").toString()
