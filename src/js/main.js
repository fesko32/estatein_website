import '../scss/styles.scss';

const buttonClose = document.querySelector('.header__top-close-button');
const banner = document.querySelector('.header__top');
const burgerButton = document.querySelector('.header__bottom-burger-menu');
const headerList = document.querySelector('.header__list');

// Проверяем, найден ли элемент

  // Функция для скрытия баннера
  function closeMenu() {
    banner.classList.add('hidden');
    
  }
  

  // Привязываем событие клика к кнопке
  buttonClose.addEventListener('click', closeMenu);
  

  function toggleMenu() {
    headerList.classList.toggle('open');
  }
  
  burgerButton.addEventListener('click', toggleMenu);