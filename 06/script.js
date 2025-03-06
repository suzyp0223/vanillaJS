// Book Constructor function
function Book(title, author) {
  this.title = title;  //'1';
  this.author - author;  //'John';
}

// const book1 = new Book('1', 'John');
// book1.title === '1';
// book1.author === 'John';

// UI Constructor function
function UI() {

}


const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const bookSubmitEl = document.getElementById('book-form');
bookSubmitEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleEl.value;
  const author = authorEl.value;

  const book = new Book(title, author);

  const ui = new UI();

  if (title === '' || author === '') {
    console.log('error');
    ui.showAlert('모든 필드를 채워주세요', 'error');
  } else {
    // 책을 리스트에 추가
    ui.addBookToList(book);
    // 성공 메시지를 보여주기
    ui.showAlert('책이 추가되었습니다!', 'success');
    // 필드들을 초기화
    ui.clearFields();
  }
});

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML =/*html*/ `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#" className="delete">X</a></td>
      `
  list.appendChild(row);

}

UI.prototype.clearFields = function () {
  titleEl.value = '';
  authorEl.value = '';
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');

  div.className = `alert ${className}`;

  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);

};

const bookList = document.getElementById('book-list');
bookList.addEventListener('click', (e) => {
  const ui = new UI();

  ui.deleteBook(e.target);
  ui.showAlert('책이 지워졌습니다.', 'success');
});


UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};