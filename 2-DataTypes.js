/* 
*** tipos de datos primitivos ***
el  valor primitivo es un datos que no es un objeto y no tiene metodos y propiedades,
la diferencia entre un tipo de dato primitivo es que los primitivos solo pueden contener un valor y ese valor 
debe ser del mismo tipo primitvo,
los no primitivos pueden contener valores de diferentes tipos de datos primitivos, esta flexibilidad es comun de estructuras de datos como matriices
y objetos.

7 tipos de datos primitivos 

- string
- number 
- bigint
- boolean
- undefined
- symbol
- null 
*/

const texto = "texto"; // -> string
const numero = 33; // number
const booleano = true; // boolean
const noDefinido = undefined; // undefined
const valorNulo = null; // null

console.log("-----STRING-----");

/* 
*** STRING ***

las cedenas de caracters con inmutables, loque significa una vez creda la cadena, no se puede cambiar
cualquier operacion que modifque la cadenas devuelve una nueva cadenas de caracteres.

estos caracteres se almacenan usando  un estándar unicode esto significa que cada caracter puede ocupar uno o dos "code units" de 16 bits (2 bytes)
dependiendo de el caracter
*/

let str = "Hola, 🦎";
console.log(str.length); // devuelve  8 -> ya que el icono ocupa 2 code units

let str2 = "Hola, 🦎";
console.log(str2);
let str3 = `Hola, 
wadafa
omaiga`;
console.log(str3);

let str4 = "hola \n Hola \n wadafa";
console.log(str4);

console.log("-----NUMBER-----");

/* 
*** NUMBER ***

JavaScript utiliza el formato IEEE 754 de doble precisión (64 bits) para representar todos los números, tanto enteros como de punto flotante. Este formato consta de tres partes

- Signo (1 bit): Indica si el número es positivo o negativo
- Exponente (11 bits): Se utiliza para representar la magnitud del número
- Mantisa (52 bits): Representa la precisión del número



*/

let numerito = 33;
console.log(`number -> ${numerito}  -> ${typeof numerito}`);
let precio = 100.2;
console.log(`number -> ${precio}  -> ${typeof precio}`);

/* 
La representación de números en formato IEEE 754 puede llevar problemas de precision especialmente en numeros de punto flotante 
*/
console.log(`suma de  0.1 + 0.2 -> `, 0.1 + 0.2); // 0.30000000000000004

console.log("-----BOOLEAN-----");

/* 
*** BOOLEAN *** 
los uncio tipos de valores posibles es true y false
*/

let veraz = true;
let falso = false;

console.log(`veraz ${veraz} - falso ${falso}`);

/* tipos de conversion */

// ---> Los valores que se consideran falsos en contextos booleanos son:
// if (false) { console.log("Esto no se ejecuta"); }
// if (0) { console.log("Esto no se ejecuta"); }
// if ("") { console.log("Esto no se ejecuta"); }
// if (null) { console.log("Esto no se ejecuta"); }
// if (undefined) { console.log("Esto no se ejecuta"); }
// if (NaN) { console.log("Esto no se ejecuta"); }

// ---> veraz
// if (true) { console.log("Esto se ejecuta"); }
// if (1) { console.log("Esto se ejecuta"); }
// if ("hello") { console.log("Esto se ejecuta"); }
// if ([]) { console.log("Esto se ejecuta"); }
// if ({}) { console.log("Esto se ejecuta"); }

/* Operadores Booleanos  */

// AND (&&)
// -> devuelve true solo si ambos operadores son verdaderos
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false
// console.log(0 && "hello"); // 0 (primer valor falso)

// OR (||)
// -> devuelve true si al menos un operador es verdadero
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(0 || "hello"); // "hello" (primer valor veraz)

// NOT (!)
// -> invierte el valor logico de su operando
// console.log(!true); // false
// console.log(!false); // true
// console.log(!0); // true
// console.log(!"hello"); // false

console.log("-----UNDEFINED y NULL-----");
/* 
*** undefined y null ***

-- undefined : indica que una variable a sido declarada pero ni inicializada, javascrip asigna automaticamente Undefined a esas variables
-- Null: representa la ausencia intencional de cualquier valor. es un valor asignable para indicar que una variable no tiene ningun valo y debe 
ser asigando exoliitamente a una variable 
*/

let a;
function doNothing() {}

console.log(`variable -> ${a}`); // undefined
console.log(`Fucnión -> ${doNothing()}`); // Undefined

let x = null;
console.log(`variable definida como nulo -> ${x}`); // Null
let obj = { key: null };
console.log(`atributo de un objeto definido como nulo -> ${obj.key}`); // null
console.log(`atributo inexistente en el objetop -> ${obj.wadafa}`); // Undefined

console.log("-----OBJETOS-----");

/* 
*** OBJETOS ***

Los objetos son utilizados para almacenar collecipon de varios datos y entidades mas complejas  asociados a un nombre clave.

para crear un objeto se usa puden usar als llaves {} que dentro contiend key:value 
*/

let usuario1 = new Object(); // sintaxis de "constructor de objetos"
let usuario2 = {}; // sintaxis de "objeto literal"

// literales y propidades

let usuario3 = {
  // objeto
  name: "jose luis", // En la clave "name" se alamcena el valro "jose luis"
  age: 23, // el la clave "ager" se almacena el valor 23
};

for (key in usuario3) {
  console.log(key);
}

/*
*** Object Prototype ***

En javascript es un  lenguaje oriento a objetos construido entorno a un modelo de prototipos 
donde  cada objeto create hereda las propiedades de su prototipo 


---para ejemplo de eso ver el consola de la web---
*/

const persona = new Object({
  name: "jose luis",
  age: 33,
  saludar: () => {
    console.log("hola!");
  },
});

console.log(persona);

// Herencia de prototipo

// Object.getPrototypeOf();
// Object.setPrototypeOf();

/* Objetos incorpados en el lenguaje  */

let letraN = Number("33");
console.log(`string a numero -> ${letraN} -> ${typeof letraN}`);

let rdNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
console.log(`Numeor random de  100 al 999 -> ${rdNumber}`);

let horaAhora = Date();
console.log(horaAhora);

let numberStr = String(33);
console.log(`number a str -> ${numberStr} -> ${typeof numberStr}`);

try {
  throw new Error("error de joselo pepito wadafa");
} catch (error) {
  console.log(`El error es -> ${error.message}`);
}

try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error("Error de evaluación:", e.message);
  }
}

try {
  let arr = new Array(-1); // Esto lanzará un RangeError
} catch (e) {
  if (e instanceof RangeError) {
    console.error("Error de rango:", e.message);
  }
}
