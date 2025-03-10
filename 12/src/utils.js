const productsUrl = "https://67c97b92102d684575c240c2.mockapi.io/products";

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("해당 요소가 존재하지 않습니다.");
};

const getStorageItem = (key) => {
  let storageItem = localStorage.getItem(key);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(key));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export { getStorageItem, getElement, productsUrl, setStorageItem, formatPrice };
