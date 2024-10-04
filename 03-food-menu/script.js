const menu = [
  {
    id: 1,
    title: "pancakes",
    category: "breakfast",
    price: 3000,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 2,
    title: "diner",
    category: "lunch",
    price: 1000,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 3,
    title: "milkshake",
    category: "shakes",
    price: 2000,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 8000,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 3000,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 7000,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 3000,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 4000,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 1000,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 2000,
    img: "./images/item-10.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
];

// 이 페이지가  처음 로드됐을때 수행할 작업 1.버튼 2.메뉴 보이기
window.addEventListener('DOMContentLoaded', () => {
  displayMenuButtons();
  displayMenuItems(menu);
});

const sectionCenterEl = document.querySelector(".section-center");
const btnContainerEl = document.querySelector(".btn-container");

// 데이터로 버튼(탭) 동적 생성. html 하드코딩X
function displayMenuButtons() {
  const categories = menu.reduce((acc, cur) => {
    // 먼저 if로 배열에 포함하고 있는지 아닌지 확인
    if (!acc.includes(cur.category)) {
      acc.push(cur.category);
    }
    return acc;
    // 카테고리를 배열로 추가
  }, ['all']);
  //  [''] 누적
  // ['all', 'dinner', 'shakes']

  // 버튼만들기
  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id="${category}">
      ${category}
      </button>`
    })
    .join('');

  btnContainerEl.innerHTML = categoryBtns;

  // 버튼 보여주기 addEventListener등록
  const filtersBtns = btnContainerEl.querySelectorAll('.filter-btn');

  filtersBtns.forEach((btn) => {
    // e이벤트객체를 가지고/ dataset-> html의 data-id에 값을 category에 전달.
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      // console.log(category);

      // 모든 버튼에서 메뉴 보이게
      const menuCategory = menu.filter((menuItem) => {
        // menuItem.category와 현재 클릭한 category와 같은것만 menuItem리턴.
        // EX) [{category: 'breakfast'}, {category:'breakfast},]
        if (menuItem.category == category) {
          return menuItem;
        }
      });

      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });

};

function displayMenuItems(menuItems) {
  let dispalyMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <div class="header">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}원</h4>
          </div>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`
  });

  console.log("dispalyMenu??", dispalyMenu);
  dispalyMenu = dispalyMenu.join('');
  console.log("정리후 dispalyMenu??", dispalyMenu);
  sectionCenterEl.innerHTML = dispalyMenu;
};