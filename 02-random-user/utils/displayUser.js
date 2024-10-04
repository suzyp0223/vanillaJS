import getElement from "./getElement.js";
import removeActive from "./removeActive.js";

const userImage = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];

  // fetchUser에서 리턴하는 정보가 person에 담겨있음.
const displayUser = (person) => {
  userImage.src = person.image;
  value.textContent = person.name;
  title.textContent = 'My name is';

  btns.forEach((btn) => {
  const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.testContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};

export default displayUser;