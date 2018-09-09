// верхнее меню

var navMain = document.querySelector('.main-menu');
var navToggle = document.querySelector('.menu-button');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-menu-closed')) {
      navMain.classList.remove('main-menu-closed');
      navMain.classList.add('main-menu-opened');
    } else {
      navMain.classList.add('main-menu-closed');
      navMain.classList.remove('main-menu-opened');
    }
  });

// карточка товара

var open = document.querySelector('.item-det');
var card = document.querySelector('.modal-card');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal-close');


open.addEventListener('click', function(def) {
  def.preventDefault();
  card.classList.add('modal-show');
  overlay.classList.remove('visually-hidden');
});


close.addEventListener('click', function(def) {
  def.preventDefault();
  card.classList.remove('modal-show');
  overlay.classList.add('visually-hidden');
});




