const togglebtn = document.querySelector('.navbar__togglebutton');
const menu = document.querySelector('.navbar__menu');

togglebtn.addEventListener('click', () => {
  menu.classList.toggle('active')
});