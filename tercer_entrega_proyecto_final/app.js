const carritoLista = [];
let productos = localStorage.getItem("productos");
let carrito = document.getElementById("carrito");
carrito.innerText = productos;

let botonFitMeBlush = document.getElementById("comprar_fitmeblush");
botonFitMeBlush.addEventListener("click", agregarFitMeBlush);

let botonDreamBouncy = document.getElementById("comprar_bouncy");
botonDreamBouncy.addEventListener("click", agregarDreamBouncy);

let botonColorSensationalLipliner = document.getElementById("comprar_lipliner");
botonColorSensationalLipliner.addEventListener(
  "click",
  agregarColorSensationalLipliner
);

let botonLimpiarCarrito = document.getElementById("limpiar_carrito");
botonLimpiarCarrito.addEventListener("click", limpiarCarrito);

fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((response) => response.json())
  .then((todosLosProductos) => {
    const productosDisponibles = [];
    for (i = 0; i < 10; i++) {
      productosDisponibles.push(todosLosProductos[i]);
    }
    const nombreDeProductosSeleccionados = productosDisponibles.map(
      (producto) => {
        return `\n${producto.name}`;
      }
    );
    const productosAMostrar = document.getElementById(
      "productos_seleccionados"
    );
    productosAMostrar.innerText = nombreDeProductosSeleccionados;
  });

function agregarFitMeBlush() {
  let carrito = document.getElementById("carrito");
  carritoLista.push("Fit Me Blush");
  carrito.innerText = carrito.innerText + `Fit Me Blush\n`;
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has agregado un Fit Me Blush!",
    duration: 3000,
  }).showToast();
}

function agregarDreamBouncy() {
  let carrito = document.getElementById("carrito");
  carritoLista.push("Dream Bouncy");
  carrito.innerText = carrito.innerText + `Dream Bouncy\n`;
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has agregado un Dream Bouncy!",
    duration: 3000,
  }).showToast();
}

function agregarColorSensationalLipliner() {
  let carrito = document.getElementById("carrito");
  carritoLista.push("Color Sensational Lipliner");
  carrito.innerText = carrito.innerText + `Color Sensational Lipliner\n`;
  guardarCarritoEnLocalStorage();
  Toastify({
    text: "Has agregado un Color Sensational Lipliner!",
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
