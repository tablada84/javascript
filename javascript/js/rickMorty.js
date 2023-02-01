fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
      <h2>${element.title}</h2>
      <p>${element.body}</p>
      `;
    });
  });
console.log();

let characters = document.querySelector("#character");

fetch("https://rickandmortyapi.com/api/character")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data.results);

    data.results.forEach((item) => {
      const content = document.createElement("div");
      content.innerHTML = `
              <h4>${item.name}</h4>
              <img src="${item.image}"></img>
              `;
      // queda para ejemplo y salida por cosola
      // characters.append(content);
    });
  });

//Rutas Relativas
