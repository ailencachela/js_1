let productos = localStorage.getItem("productos");
let carrito = document.getElementById("carrito");
carrito.innerText = productos;

let botonCepillo = document.getElementById("comprar_cepillo");
botonCepillo.addEventListener("click", agregarCepillo);

let botonJabon = document.getElementById("comprar_jabon");
botonJabon.addEventListener("click", agregarJabon);

let botonShampoo = document.getElementById("comprar_shampoo");
botonShampoo.addEventListener("click", agregarShampoo);

let botonLimpiarCarrito = document.getElementById("limpiar_carrito");
botonLimpiarCarrito.addEventListener("click", limpiarCarrito);

function agregarCepillo() {
  let carrito = document.getElementById("carrito");
  carrito.innerText = carrito.innerText + `Cepillo\n`;
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has agregado un cepillo!",
    duration: 3000,
  }).showToast();
}
function agregarJabon() {
  let carrito = document.getElementById("carrito");
  carrito.innerText = carrito.innerText + `Jabon\n`;
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has agregado un jabón!",
    duration: 3000,
  }).showToast();
}
function agregarShampoo() {
  let carrito = document.getElementById("carrito");
  carrito.innerText = carrito.innerText + `Shampoo\n`;
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has agregado un shampoo!",
    duration: 3000,
  }).showToast();
}

function guardarCarritoEnLocalStorage() {
  let carrito = document.getElementById("carrito");
  let productos = carrito.innerText;
  localStorage.setItem("productos", productos);
}

function limpiarCarrito() {
  let carrito = document.getElementById("carrito");
  carrito.innerText = "";
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has limpiado tu carrito!",
    duration: 3000,
  }).showToast();
}

// let cepilloDental = {
//   precio: 300,
//   nombre: "Cepillo de dientes",
// };

// let shampooSolido = {
//   precio: 700,
//   nombre: "Shampoo sólido",
// };

// let acondicionadorSolido = {
//   precio: 800,
//   nombre: "Acondicionador sólido",
// };

// let listaProductos = [cepilloDental, shampooSolido, acondicionadorSolido];

// let botonIniciador = document.getElementById("boton_empezar_programa");
// botonIniciador.addEventListener("click", programa);

// function programa() {
//   let productoIngresado = prompt(
//     "Elige: Cepillo de dientes, Shampoo sólido o Acondicionador sólido"
//   );

//   let productoElegidoLista = listaProductos.filter((producto) => {
//     return producto.nombre.toLowerCase() === productoIngresado.toLowerCase();
//   });

//   if (productoElegidoLista.length === 0) {
//     alert("Producto ingresado no corresponde con ninguno en la lista.");
//   } else {
//     let productoElegido = productoElegidoLista[0];
//     alert(
//       `Producto ${productoElegido.nombre}, valor ${productoElegido.precio}`
//     );

//     let precio = productoElegido.precio;
//     let cantidad = prompt("Ingrese la cantidad del producto deseado: ");
//     let cuotas = Number(
//       prompt("Ingrese las cuotas deseadas (3 sin interés): ")
//     );
//     let interes = 0.2;

//     if (cuotas === 3) {
//       interes = 0;
//     }

//     let cuotaBase = generarCuotaBase(precio, cantidad, cuotas);
//     let valorInteres = generarValorInteres(cuotaBase, interes);
//     let valorCuotaTotal = generarValorCuotaTotal(cuotaBase, valorInteres);
//     let valorCompraTotal = generarValorCompraTotal(valorCuotaTotal, cuotas);

//     alert("El valor total de la compra: $" + valorCompraTotal);

//     let valorPagadoHastaElMomento = 0;
//     for (i = 1; i <= cuotas; i++) {
//       valorPagadoHastaElMomento = valorPagadoHastaElMomento + valorCuotaTotal;
//       if (i === 1) {
//         alert("¡Empezaste a pagar las cuotas!");
//       }
//       alert(
//         "El valor de la cuota " +
//           i +
//           " es $" +
//           valorCuotaTotal +
//           " y hasta ahora llevas pagando $" +
//           valorPagadoHastaElMomento
//       );
//       if (i === cuotas) {
//         alert("¡Ya pagaste todas las cuotas! ");
//       }
//     }
//   }
// }

// function generarCuotaBase(precio, cantidad, cuotas) {
//   return (precio * cantidad) / cuotas;
// }

// function generarValorInteres(cuotaBase, interes) {
//   return cuotaBase * interes;
// }

// function generarValorCuotaTotal(cuotaBase, valorInteres) {
//   return cuotaBase + valorInteres;
// }

// function generarValorCompraTotal(valorCuotaTotal, cuotas) {
//   return valorCuotaTotal * cuotas;
// }
