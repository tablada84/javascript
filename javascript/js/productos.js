const marketContent = document.getElementById("marketContent");
const botonBuscar = document.getElementById("btnBuscar");
const buscarInputs = document.getElementById("buscarInput");
let productos;

fetch("../data/data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    productos = jsonData;

    console.log(productos);

    productos.forEach((produc) => {
      let content = document.createElement("div");
      content.className = "card";
      content.innerHTML = `
        <img src="${produc.img}"
        <h4>${produc.nombre}</h4>
        <a class="precio">${produc.precio}</a>
        `;
      marketContent.append(content);

      let comprar = document.createElement("button");
      comprar.innerText = "comprar";
      comprar.className = "comprar";

      content.append(comprar);

      comprar.addEventListener("click", () => {
        const repeat = carrito.some(
          (repeatProduc) => repeatProduc.id === produc.id
        );

        if (repeat) {
          carrito.map((prod) => {
            if (prod.id === produc.id) {
              prod.cantidad++;
            }
          });
        } else {
          carrito.push({
            id: produc.id,
            img: produc.img,
            nombre: produc.nombre,
            precio: produc.precio,
            cantidad: produc.cantidad,
          });

          console.log(carrito);

          saveLocal();
          carritoCounter();
        }
      });
      carritoCounter();

      //////////////////////
      botonBuscar.addEventListener("click", (e) => {
        e.preventDefault();
        productoBuscar = buscarInputs.value;

        if (productoBuscar != "") {
          function filtrarPorProductos(arr, filtro) {
            return arr.filter((productos) => {
              return productos.nombre.includes(filtro);
            });
          }

          const filtrado = filtrarPorProductos(productos, productoBuscar);
          let encontrados = " ";

          filtrado.forEach((prod) => {
            encontrados += prod.nombre;
            encontrados += " ";
          });

          Swal.fire("Productos Encontrados", encontrados, "success");
        }
      });
      ///////////////////
    });
  });
