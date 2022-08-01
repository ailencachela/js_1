let products = [];
const savedProducts = JSON.parse(localStorage.getItem("products"));
if (savedProducts) {
  console.log("ya habia");
  products = savedProducts;
  createProducts(savedProducts);
  savedProducts.forEach((prod) => {
    if (prod.amount > 0) {
      renderSelectedProductHTML(prod);
    }
  });
} else {
  console.log("no habia");
  fetch("/productos.json")
    .then((response) => response.json())
    .then((productList) => {
      products = productList;
      createProducts(products);
    });
}

function createProducts(productList) {
  renderProducts(productList);
  assignAddProductButtonClickListener();
  assignClearShoppingCartClickListener();
}

function assignClearShoppingCartClickListener() {
  const div = document.getElementById("button_shopping_cart_clear");
  div.addEventListener("click", () => {
    products.forEach((prod) => (prod.amount = 0));
    document.getElementById("shopping_cart_products").innerHTML = "";
    // saveProductsLocalStorage(products);
    localStorage.clear();
    showToast("Has eliminado todos los productos del carrito");
  });
}

function renderProducts(productList) {
  productList.forEach((product) => {
    document.getElementById("products_container").innerHTML +=
      createProductHTML(product);
  });
}

function assignAddProductButtonClickListener() {
  products.forEach((product) => {
    const button = document.getElementById(`button_${product.id}_add`);
    button.addEventListener("click", (e) => {
      addProductToShoppingCart(product);
      showToast(`${product.name} agregado al carrito`);
      saveProductsLocalStorage(products);
    });
  });
}

function saveProductsLocalStorage(productList) {
  localStorage.setItem("products", JSON.stringify(productList));
}

function addProductToShoppingCart(product) {
  if (!product.amount || product.amount === 0) {
    product.amount = 1;
    renderSelectedProductHTML(product);
  } else {
    product.amount++;
    reRenderSelectedProductAmount(product);
  }
}

function renderSelectedProductHTML(product) {
  const shoppingCartProducts = document.getElementById(
    "shopping_cart_products"
  );
  shoppingCartProducts.innerHTML += createSelectedProductHTML(product);
}

function reRenderSelectedProductAmount(product, div) {
  const shoppingCartProducts = document.getElementById(
    "shopping_cart_products"
  );
  document.getElementById(`product_${product.id}`).remove();
  shoppingCartProducts.innerHTML += createSelectedProductHTML(product);
}

function createProductHTML(element) {
  return `
    <div class="card col-md-4">
      <div class="card-body">
        <img class="card-img-top" src="${element.image}" >
        <h4 class="card-title"> ${element.name} </h4>
        <p> Precio: ${element.price} </p>
        <button id="button_${element.id}_add" class="btn btn-primary card-button"> Agregar ${element.name} </button>
      </div>
    </div>
  `;
}

function createSelectedProductHTML(element) {
  return `
    <div id="product_${element.id}" class="card col-md-4">
      <div class="card-body">
        <img class="card-img-top" src="${element.image}" >
        <h4 class="card-title"> ${element.name} </h4>
        <p> Precio: ${element.price} </p>
        <p> Cantidad: ${element.amount} </p>
      </div>
    </div>
  `;
}

function showToast(text) {
  Toastify({
    text: text,
    duration: 3000,
  }).showToast();
}
