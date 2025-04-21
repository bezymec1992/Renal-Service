document.addEventListener('DOMContentLoaded', function() {

  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__nav');
  const bodyOverlay = document.querySelector('.body-overlay');
  const body = document.body;
  const navLinks = document.querySelectorAll('.header__nav-link');
    
  // Function to close menu
  const closeMenu = () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    bodyOverlay.classList.remove('active');
    body.classList.remove('menu-open');
  };

  // Burger menu functionality
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      bodyOverlay.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
  }

  // Close menu when clicking overlay
  if (bodyOverlay) {
    bodyOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });


  // Extra section. click on item add active class
  const items = document.querySelectorAll('.extra__item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('extra__item-active'));
      item.classList.add('extra__item-active');
    });
  });

  //Insurance section. click on card add active class
  const insuranceCards = document.querySelectorAll('.insurance__card');

  insuranceCards.forEach(card => {
    card.addEventListener('click', () => {
      insuranceCards.forEach(i => i.classList.remove('insurance__card-active'));
      card.classList.add('insurance__card-active');
    });
  });


  //Stepper
  const circles = document.querySelectorAll('.circle');
  const lines = document.querySelectorAll('.line');

  function updateStepper(stepIndex) {
    circles.forEach((circle, i) => {
      circle.classList.toggle('active', i <= stepIndex);
    });

    lines.forEach((line, i) => {
      line.classList.toggle('active', i < stepIndex);
    });
  }

  // Main section. click on button add visible class
  const section1 = document.querySelector('.main__block1');
  const section2 = document.querySelector('.main__block2');
  const section3 = document.querySelector('.main__block3');
  const section4 = document.querySelector('.main__block4');

  function showSection(current, next, stepIndex) {
    current.style.opacity = '0';
    setTimeout(() => {
      current.classList.remove('visible');
      next.classList.add('visible');
      next.style.opacity = '1';
      updateStepper(stepIndex);
    }, 1000);
  }
  const sections = [section1, section2, section3, section4];
  document.querySelector('.main__btn1').addEventListener('click', () => {
    showSection(sections[0], sections[1], 1);
    scrollToTop();
  });

  document.querySelector('.main__btn2').addEventListener('click', () => {
    showSection(sections[1], sections[2], 2);
    scrollToTop();
  });

  document.querySelector('.main__btn3').addEventListener('click', () => {
    showSection(sections[2], sections[3], 3);
    scrollToTop();
  });


  //клик назад на степы
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, i) => {
    step.addEventListener('click', () => {
      const currentIndex = sections.findIndex(section => section.classList.contains('visible'));
      if (i < currentIndex) {
        showSection(sections[currentIndex], sections[i], i);
      }
    });
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});