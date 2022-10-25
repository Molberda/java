const nameRef = document.querySelector(".name");

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
 return response.json()
}).then(data => {
   nameRef.innerHTML = data.name
 });
