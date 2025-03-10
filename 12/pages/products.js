import { getElement } from "../utils.js";
import { setupStore } from "../store.js";
import fetchProducts from "../fetchProducts.js";
import display from "../displayProducts.js";

const init = async () => {
  const loadingEl = getElement(".page-loading");

  // 상품들 데이터 가져오기
  const products = await fetchProducts();
  setupStore(products);

  // 상품들을 보여주기
  display(products, getElement(".products-container"));

  loadingEl.style.display = "none";
};

init();
