
const menuBurger = document.querySelector('.navb');

const menu = document.getElementById('menu');

menuBurger.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

const closeBtn = document.querySelector('#menu li:first-child a');


closeBtn.addEventListener('click', () => {

  menu.classList.remove('show-menu');
});


menu.addEventListener('click', (event) => {
  if (event.target === menu) {

    menu.classList.remove('show-menu');
  }
});
