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
