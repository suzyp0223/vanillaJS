import display from "./displayProducts.js";
import fetchProducts from "./fetchProducts.js";
import { setupStore } from "./store.js";
import { getElement } from "./utils.js";

import './toggleSidebar.js';
import './cart/toggleCart.js';


const init = async () => {
  const products = await fetchProducts();

  if (products) {
    setupStore(products);
  }

  const featured = products.filter((product) => product.featured === true);
  display(featured, getElement(".featured-center"));
};

window.addEventListener("DOMContentLoaded", init);
