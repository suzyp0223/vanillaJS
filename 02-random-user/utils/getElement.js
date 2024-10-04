const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('없는 요소입니다');
};

export default getElement;