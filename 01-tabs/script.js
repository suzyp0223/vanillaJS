const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener("click", (e) => {
  // console.log(e.target);
  console.log("id: ", e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // console.log(btns);

    btns.forEach((btns) => {
      btns.classList.remove("active");
    });

    e.target.classList.add("active");

    articles.forEach((articles) => {
      articles.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
