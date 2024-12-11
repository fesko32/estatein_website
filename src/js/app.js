const buttonClose = document.querySelector('.header__top-close-button');
const banner = document.querySelector('.header__top')

function closeMenu() {
    banner.classList.add('hidden'); // Добавляем класс для скрытия меню
}

buttonClose.addEventListener('click', closeMenu);


  
  // Привязываем событие клика к кнопке


