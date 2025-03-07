import { findProduct } from "../store.js";
import { formatPrice, getElement } from "../utils.js";
import addToCartDOM from "./addToCartDom.js";

const cartItemCountEl = getElement(".cart-item-count");
const cartItemsEl = getElement(".cart-items");
const cartTotalEl = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);

  //  해당 아이템이 장바구니에 없을 때
  if (!item) {
    let product = findProduct(id);

    // (...) 얕은 복사를 해서 원본 product는 변경되지 않고, 새로운 객체가 만들어짐.
    product = { ...product, amount: 1 };

    cart = [...cart, product];

    // item을 DOM에 추가
    addToCartDOM(product);
    //  이미 해당 아이템이 장바구니에 있을 때
  } else {
    const amount = increaseAmount(id);
    const items = [...cartItemsEl.querySelectorAll(".cart-item-amount")];
    const itemEl = items.find((value) => value.dataset.id === id);
    itemEl.textContent = amount;
  }
};

function displayCartItemCount() {
  const amount = cart.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);
  cartItemCountEl.textContent = amount;
}

function displayCartTotal() {
  let total = cart.reduce((acc, curr) => {
    return (acc += curr.price * curr.amount);
  }, 0);

  cartTotalEl.textContent = `Total: ${formatPrice(total)}`;
}

function removeItem(id) {
 cart = cart.filter((cartItem) => cartItem.id !== id);

}

function increaseAmount(id) {
  let newAmount;

  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      // ...cartItem을 복사하고, 새 객체 amount에 newAmount를 넣어주고 map으로 새배열반환. 나머지 값은 유지됨.
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}


function decreaseAmount(id) {
  let newAmount;

  cart = cart.map((cartItem) => {
    if(cartItem.id ===id) {
      newAmount = cartItem.amount - 1;
      cartItem = {...cartItem, amount: newAmount}
    }
    return cartItem;
  })
  return newAmount;
}

function setupCartFunctionality() {
  cartItemsEl.addEventListener('click', (e) => {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;

    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);

      element.parentElement.parentElement.remove();
    }
    // increase
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (parent.classList.contains('cart-item-decrease-btn' )){
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
  })
}