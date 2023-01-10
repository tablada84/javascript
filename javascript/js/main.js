function Persona(nombreApellido, direccion, telefono, email) {
  this.nombreApellido = nombreApellido;
  this.direccion = direccion;
  this.telefono = telefono;
  this.email = email;

  this.saludar = () => {
    console.log("Bienvenido/a " + this.nombreApellido);
  };

  this.imprimir = () => {
    console.log(
      `Nombre: ${this.nombreApellido}, Direccion: ${this.direccion}, Telefono: ${this.telefono}, Email: ${this.email}`
    );
  };
}

function validarVacio(valor) {
  if (valor == null || valor.length == 0) {
    return false;
  } else {
    return true;
  }
}

alert("ingresar sus datos");

let validar = false;
let nombreApellido;
let direccion;
let telefono;
let email;

while (validar == false) {
  nombreApellido = prompt("Ingresar su nombre y apellido");
  validar = validarVacio(nombreApellido);
}
validar = false;

while (validar == false) {
  direccion = prompt("Ingresar  direccion");
  validar = validarVacio(direccion);
}
validar = false;

while (validar == false) {
  telefono = prompt("Ingresar telefono");
  validar = validarVacio(telefono);
}
validar = false;

while (validar == false) {
  email = prompt("Ingresar su correo de mail");
  validar = validarVacio(email);
}
validar = false;

const Cliente = new Persona(nombreApellido, direccion, telefono, email);

Cliente.saludar();
Cliente.imprimir();
console.log(Cliente);

const numeros = [1, 2, 3, 4, 5];
const productos = [
  { id: 1, nombre: "nueces", precio: 500 },
  { id: 2, nombre: "almendras", precio: 100 },
  { id: 3, nombre: "pasas de uva", precio: 200 },
  { id: 4, nombre: "mixfrutal", precio: 400 },
  { id: 5, nombre: "mani", precio: 200 },
  { id: 6, nombre: "higos", precio: 600 },
  { id: 7, nombre: "castana", precio: 450 },
  { id: 8, nombre: "mixtropical", precio: 550 },
];

let carrito = [];

let seleccion = prompt("hola desea comprar algun productos si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingrese si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir, hasta pronto!!");
}

while (seleccion != "no") {
  let producto = prompt("agregar un producto a tu carrito");
  let precio = 0;
  let optenerPrecio;

  switch (producto) {
    case "nueces":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "almendras":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "pasas de uva":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "mixfrutal":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "mani":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    default:
      alert("no tenemos ese producto");
      break;
  }

  let unidades = parseInt(prompt("cuantas unidades va a llevar"));

  carrito.push({ producto, unidades, precio });
  console.log(carrito);

  seleccion = prompt("desea seguir comprando?");

  while (seleccion === "no") {
    alert("gracias por la compra!!");
    carrito.forEach((carritoFinal) => {
      console.log(
        "producto: ",
        carritoFinal.producto,
        "unidades: ",
        carritoFinal.unidades,
        "total a pagar por producto $",
        carritoFinal.unidades * carritoFinal.precio
      );
    });
    break;
  }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`el total a pagar por su compra es: ${total}`);
console.log(`el total a pagar por su compra es: ${total}`);

const mayorCosto = carrito.filter((el) => el.precio > 400);
console.log(
  `El valor mayor de precios de producto comprado es: ${mayorCosto[0].precio} `
);

//Ejemplo de filtrado

function filtrarPorProductos(arr, filtro) {
  return arr.filter((productos) => {
    return productos.nombre.includes(filtro);
  });
}
let buscar = prompt("ingresar el nombre del producto");
const filtrado = filtrarPorProductos(productos, buscar);
let sumarFilt = 0; // opcional

filtrado.forEach((prod) => {
  alert(prod.nombre);
  sumarFilt += prod.precio; // opcional
});

alert(sumarFilt); //opcional

console.log(filtrado);

//eventos on click

/* function clickTitulo() {
  console.log("el usuario hizo click en el titulo");
}
const titulo2 = document.getElementById("titulos");
titulo2.addEventListener = (click, clickTitulo);

const form = document.querySelector("#formulario");

const enviarFormulario = (Event) => {
  Event.preventDefaul();
  alert(Event, target, nombre, email, telefono);
};

form.addEventListener("submit", enviarFormulario);

btnregistrame.addEventListener("click", () => {
  let nombre = document.getElementById("inputNombre"),
    value;
  registrame(nombre);
});

const formulario = document.getElementById("form");

formulario.addEventlistener("sumit", function (e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre-form").value;
  alert(nombre);
}); */

/* verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">carrito.</h1>
`;
  modalContainer.append(modalHeader);
  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
  <h3>${product.nombre}</h3>
  <p>${product.precio} $</p>
  `;
    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total}`;
});*/
/* let preveiwPoductos = document.querySelector(".productos-previwe");
let preveiwbox = preveiwPoductos.querySelectorAll(".preview");

document.querySelectorAll(".productos-row .productos").forEach((productos) => {
  produc.onclick = () => {
    preveiwPoductos.getElementsByClassName.display = "flex";
    let name = productos.getAttribute("data-name");
    preveiwbox.forEach((preview) => {
      let target = productos.getAtribute("date-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

preveiwbox.forEach((close) => {
  close.querySelector(".fa-xmark").onclick = () => {
    close.clasicList.remove("active");
    preveiwPoductos.style.display = none;
  };
}); */
