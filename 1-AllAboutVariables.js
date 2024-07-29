/*
***Declaración de variables***
Para declarar variables usamos las palabras reservadas let, var y const.

***Reglas para nombrar variables***
Para asignar el nombre de una variable debemos seguir algunos consejos y convenciones.

- Ser descriptivo: no debe ser ambiguo a la hora de declarar variables ("o", "x"). El nombre "o" no nos 
dice mucho sobre lo que almacena esa variable.
- No ser tan descriptivo: debemos asegurarnos de no exagerar en describir el nombre la variable 
("theFirstNameOfUser"). Este nombre es más de lo que se necesita para describirla. Un nombre mejor sería 
"firstName".
- Abreviar las palabras: Abreviar palabras es muy útil al describir palabras largas y las transforma en 
palabras cortas y simples, siempre que la abreviatura parezca sensata. Ejemplo: "dataBaseName" solo sería 
"dbName".

***Convenciones***

- camelCase: la primera letra se escribe en mayúscula excepto la de la primera palabra. Este formato es el 
utilizado por JavaScript. Ejemplo: indexOf, getElementById, querySelectorAll.
*/

let name = "jose luis"; // string
var lastName = "galindo cardenas"; // string
const age = 23; // number - int
let weight = 63.6; // number - float
let isActive = false; // booleano
const favoriteFruits = ["uva", "pera", "durazno"]; // array de strings - lista
const address = {
  country: "Peru",
  city: "Andahuaylas",
  street: "jr tadeo legui 158",
  postalCode: "03701",
}; // objeto en JS con atributos

/*
***Hoisting - elevación***

Este concepto se refiere a que el intérprete parece mover la declaración de variables, funciones o clases a 
la parte superior de su alcance, antes de ejecutar el código.

Como vemos en el ejemplo, se hace el llamado a la función getNameCat antes de declararla y funciona.
*/

getNameCat("pochito");

function getNameCat(name) {
  console.log(`El nombre del gato es ${name}`);
}

/*
***Alcance de variables***

El alcance se refiere a cómo se puede utilizar una variable después de declararla. El alcance depende de la 
palabra clave usada para declararla: let, const o var.

Ejemplo de 3 ámbitos:
*/

console.log("------ Alcance global ------");
/*
- Ámbito global: las variables declaradas fuera de cualquier función o llaves {} tienen un alcance global y 
se puede acceder a ellas desde cualquier lugar dentro del mismo código. let, const y var todas proporcionan 
este alcance.
*/

let variableGlobalOne = 23;
const variableGlobalTwo = "wadafa";
var variableGlobalThree = "omaiga";
(function () {
  // -> función anónima
  console.log(
    `${variableGlobalOne} - ${variableGlobalTwo} - ${variableGlobalThree}`
  );
})();

console.log("------ Alcance de función ------");
/*
- Ámbito de función: las variables declaradas dentro de una función solo se pueden usar ahí. Fuera de la 
función no están declaradas. var, const y let todas proporcionan este alcance.
*/

(function ambitoFuncion() {
  const firstName = "jose";
  console.log(`mi primer nombre es ${firstName}`);
})();

// firstName -> no se puede utilizar

console.log("------ Alcance de bloque ------");
/*
- Ámbito de bloque: Este es cualquier parte del código delimitada por llaves {}. No se puede acceder a 
variables declaradas dentro de ese bloque fuera de ese bloque. Este ámbito solo lo proporcionan las 
palabras let y const. Si declaramos con var, no tendrá ese alcance.
*/
{
  const wadafa = "omaiga";
  let beba = "me encanta";
  var noEsBloque = "timba";
  console.log(`dentro del bloque: ${wadafa} - ${beba}`);
}

// wadafa -> no se puede utilizar
// beba -> no se puede utilizar
console.log(`var no es de bloque ${noEsBloque}`);
