const names = ["jose", "luis", "gladis", "ruth", "mayra", "janeth"];

console.log(names);

/* map() : Permite recorrer el array y modificar los elementos presentes en él, retornando 
un nuevo array con la misma longitud que el original. */
const newNames = names.map((name) => {
  return name.toUpperCase();
});
console.log(newNames);

/* filter() : Recorre el array y retorna un nuevo array con aquellos 
elementos que pasen una determinada condición. */
const filterNames = names.filter((name) => name != "gladis");
console.log(filterNames);

/* forEach() : Permite iterar el contenido de un array. Recibe un callback que 
toma como parámetro el elemento actual de la iteración y el indice del mismo. */

const ff = names.forEach((name, index) => {
  console.log(`nombre -> ${name}. indice -> ${index}`);
});

/* find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.*/
const findName = names.find((name) => name == "jose");
console.log(findName);

/* concat() : Se utiliza para unir dos o más arrays. Este método no cambia los 
arrays existentes, sino que devuelve un nuevo array. */

const otrosNames = ["liseth"];
const allNames = names.concat(otrosNames);
console.log(allNames);
console.log([...names, ...otrosNames]);

/* includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda. */
console.log(names.includes("jose"));
console.log(names.includes("lagarto"));

/* join() : Une todos los elementos de un array en una cadena. Podemos 
pasarle como parámetro el carácter de separación que debe agregar entre los elementos. */
console.log(names.join(""));
console.log(names.join("-"));

/* reduce() : Aplica una función a un acumulador y a cada valor de una 
array (de izquierda a derecha) para reducirlo a un único valor. */
const numbers = [1, 2, 3];
const sumaNumbers = numbers.reduce((after, next) => after + next);
console.log(sumaNumbers);

/* indexOf() : Retorna el primer índice en el que se puede encontrar un 
elemento dado en el array, ó retorna -1 si el elemento no esta presente. */
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(33));

/* findIndex() : Retorna el índice del primer elemento de un array que 
cumpla con la función de prueba proporcionada. En caso contrario devuelve -1. */
console.log(numbers.findIndex((n) => n == 1));
console.log(numbers.findIndex((n) => n == 33));

/* push() : Añade uno o más elementos al final de un 
array y devuelve la nueva longitud del array. */
console.log(numbers.push(33));
console.log(numbers);

/* pop() : Elimina el último elemento de un array y lo devuelve. Este método 
cambia la longitud del array. */
console.log(numbers.pop());
console.log(numbers);
