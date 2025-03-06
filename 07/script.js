import { UI } from './ui.js';
import { Product } from "./product.js";

const formEl = document.getElementById('product-form');
const nameInputEl = document.getElementById('name');
const priceInputEl = document.getElementById('price');
const yearInputEl = document.getElementById('year');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInputEl.value;
  const price = priceInputEl.value;
  const year = yearInputEl.value;

  const product = new Product(name, price, year);

  const ui = new UI();

  if (name === '' || price === '' || year === '') {
    return ui.showMessage('모든 필드에 데이터를 삽입하십시오', 'error');
  }

  // 추가
  ui.addProduct(product);
  // 성공메시지
  ui.showMessage('제품이 성공적으로 추가되었습니다.', 'success');

  // field 초기화
  ui.resetField();

});

// 삭제
document.getElementById('product-list').addEventListener('click', (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
});