const nameRef = document.querySelector(".name");

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  nameRef.innerHTML = data.name;
}

main ()