/* *********************** ==, ===, Object.is *********************** */

const x = 5;

/* = -> igual a */
console.log(`x == 8 -> ${x == 8}`); // false
console.log(`x == 5 -> ${x == 5}`); // true
console.log(`x == "5" -> ${x == "5"}`); // true

/* === -> igual valor e igual tipo */
console.log(`x === 5 -> ${x === 5}`); // true
console.log(`x === "5" -> ${x === "5"}`); // false

/*  != -> no es igual */
console.log(`x != 8 -> ${x != 8}`); // true

/*  !== valor no igual o tipo no igual */
console.log(`x !== 5 -> ${x !== 5}`); // false
console.log(`x !== "5" -> ${x !== "5"}`); // true
console.log(`x !== 8 -> ${x !== 8}`); // true

/* > -> mayor que */
console.log(`x > 8 -> ${x > 8}`); // false

/* < -> menor que */
console.log(`x < 8 -> ${x < 8}`); // true

/* >= -> mayor que o igual a */
console.log(`x >= 8 -> ${x >= 8}`); // false

/* <= -> menor que o igual a */
console.log(`x <= 8 -> ${x <= 8}`); // true

/* Object.is */
console.log(Object.is("1", 1));
// return: false

console.log(Object.is(NaN, NaN));
// return: true

console.log(Object.is(-0, 0));
// return: false

const obj = {};
console.log(Object.is(obj, {}));
// return: false
