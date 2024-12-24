
  const toggleButton = document.querySelector('.header__toggle');
  const navMenu = document.querySelector('.header__nav');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('header__nav--active');
  });
