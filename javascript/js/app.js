const modalContainer = document.getElementById("modal-container");

const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//Creando elemento

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));

//destructuring

let container = document.querySelector(".container");
function crearHtml(arr) {
  let html;
  arr.forEach((el) => {});
  const { nombre, precio, img } = el;
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${img}"
    <h4>${nombre}</h4>
    <a class="precio">${precio}</a>
    `;
  contenedor.innerHTML += html;
}

//sweet alert
/* Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
  }
}); */
