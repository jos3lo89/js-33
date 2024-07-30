let user = {
  name: "jose luis",
  lastName: "galindo cardenas",
  fullname: function () {
    return `${this.name} ${this.lastName}`;
  },

  sayHi() {
    console.log(this.name);
  },
};

console.log(user.fullname());
user.sayHi();

/* wadafa this alone */
const wadafa = this;

console.log(wadafa);
