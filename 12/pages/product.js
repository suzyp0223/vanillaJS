import { addToCart } from "../cart/setupCart.js";
import "../cart/toggleCart.js";
import "../toggleSidebar.js";

import "../cart/setupCart.js";

import { formatPrice, getElement, productsUrl } from "../utils.js";

const loadingEl = getElement(".page-loading");
const centerEl = getElement(".single-product-center");
const pageTitleEl = getElement(".page-hero-title");
const imgEl = getElement(".single-product-img");
const titleEl = getElement(".single-product-title");
const companyEl = getElement(".single-product-company");
const priceEl = getElement(".single-product-price");
const colorsEl = getElement(".single-product-colors");
const descEl = getElement(".single-product-desc");
const cartBtnEl = getElement(".addToCartBtn");

// cart product
let productID;

// 돔이 로드 됐을때 보여주는 코드
window.addEventListener("DOMContentLoaded", async () => {
  const urlID = window.location.search;

  try {
    // 요청 보내기
    const response = await fetch(`${productsUrl}${urlID}`);
    // 성공시
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();

      const { id, name, company, price, colors, description, image } =
        product[0];
      productID = id;

      // 가져온 데이터를 하나씩 넣어줌
      document.title = `${name.toUpperCase()} | Foody`;
      pageTitleEl.textContent = `Home / ${name}`;
      imgEl.src = image;
      titleEl.textContent = name;
      companyEl.textContent = `by ${company}`;
      priceEl.textContent = formatPrice(price);
      descEl.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsEl.appendChild(span);
      });
    } else {
      console.log(response.status, response.statusText);
      centerEl.innerHTML = `
        <div>
          <h3 class="error>에러가 났습니다.</h3>
          <a href="index.html" class="btn">홈으로</a>
        </div>
        `;
    }
  } catch (error) {
    console.log("에러메시지:", error);
  }
  loadingEl.style.display = "none";
});

cartBtnEl.addEventListener("click", () => {
  addToCart(productID);
});
