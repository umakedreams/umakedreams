let menuActive = document.querySelector('.main-menu__activ');
let headerMenu = document.querySelector('.header-header__right_menu_img');

function toggleMenu() {
menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);