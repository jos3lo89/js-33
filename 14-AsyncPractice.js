const url = "https://fakestoreapi.com/products";
/* 
fetch(url, {
  method: "GET",
  credentials: "include",
  headers: {},
})
  .then((resolve) => resolve.json())
  .then((res) => {
    console.log("Productos");
    console.log(res);
  })
  .catch((error) => console.log(error)); */

let cookie = "Bearer werqwerqwerqwerqwerwqerqewr";

let [key, token] = cookie.split(" ");

console.log(token);

async function getTodo() {
  const res = await fetch(`${url}/1`);
  const data = await res.json();
  console.log(data);
}

getTodo();


