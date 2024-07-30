/* class */
class Persona {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.name}`);
  }
}

/* Herencia */
class User extends Persona {
  constructor(name, lastName, age, email, password) {
    super(name, lastName, age);
    this.email = email;
    this.password = password;
  }

  getInfo() {
    console.log({
      name: this.name,
      lastName: this.lastName,
      age: this.lastName,
      email: this.email,
    });
  }
}

const user = new User(
  "jose luis",
  "galindo cardenas",
  23,
  "jos3lo33@gmail.com",
  "1234"
);

user.saludar();
user.getInfo();

/* Static */

class Mate {
  static add(x, y) {
    return x + y;
  }

  resta(x, o) {
    return x - o;
  }
}

console.log(Mate.add(5, 10));

const mate = new Mate();
console.log(mate.resta(33, 3));

/* private */
class Contador {
  #numero = 0;

  incrementar() {
    this.#numero++;
    console.log(this.#numero);
  }
}

const contador = new Contador();
contador.incrementar();
contador.incrementar();
console.log(contador.numero);
