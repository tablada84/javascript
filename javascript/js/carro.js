const verCarrito = document.getElementById("verCarrito");
// contador de item en carrito
const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h1 class="modal-header-title"> Carrito.</h1 > `;

  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalbutton);

  carrito.forEach((produc) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <img src="${produc.img}">
      <h3>${produc.nombre}</h3>
      <a>${produc.precio}$</a>
      <span class="restar">-</span>
      <span class="sumar">+</span>
      <p>cantidad:${produc.cantidad}</p>
      <p>Total:${produc.cantidad * produc.precio}</p>
      `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (produc.cantidad > 0) {
        produc.cantidad--;
        if (produc.cantidad == 0) {
          eliminarProductos();
        }
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      produc.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-produc";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProductos);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProductos = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  pintarCarrito();
  saveLocal();
  carritoCounter();
};
