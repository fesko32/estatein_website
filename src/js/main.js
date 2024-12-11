import '../scss/styles.scss';

const buttonClose = document.querySelector('.header__top-close-button');
const banner = document.querySelector('.header__top');
const burgerButton = document.querySelector('.header__bottom-burger-menu');
const headeList = document.querySelector('.header__list');

// Проверяем, найден ли элемент

  // Функция для скрытия баннера
  function closeMenu() {
    banner.classList.add('hidden'); // Добавляем класс "hidden"
  }
  

  // Привязываем событие клика к кнопке
  buttonClose.addEventListener('click', closeMenu);


  function openMenu() {
    headeList.classList.add('open')
  }

  burgerButton.addEventListener('click', openMenu);