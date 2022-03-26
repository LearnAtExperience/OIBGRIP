// Navbar toggler & toggling animation
let navbarTogglerIcon = document.querySelector('.navbarTogglerIcon');
let navLink = document.querySelectorAll('.navLink');

navbarTogglerIcon.addEventListener('click', () => {
  document.querySelector('.toggleLine1').classList.toggle('anim1');
  document.querySelector('.toggleLine2').classList.toggle('anim2');
  document.querySelector('.toggleLine3').classList.toggle('anim3');
  document.querySelector('.navbar').classList.toggle('show');
});

// Toggling Navbar and Navbar Toggler onclick of nav link
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.toggleLine1').classList.toggle('anim1');
    document.querySelector('.toggleLine2').classList.toggle('anim2');
    document.querySelector('.toggleLine3').classList.toggle('anim3');
    document.querySelector('.navbar').classList.toggle('show');
  });
});

// Setting target blank for project options
document.querySelectorAll('.projectOption').forEach((proOption) => {
  proOption.setAttribute('target', '_blank');
});

// Function to toggle between dark and light mode

document.querySelector('.modeToggler').onclick = () => {
  // To toggle between icons
  if (document.querySelector('.modeToggler i').classList.contains('fa-sun')) {
    document.querySelector('.modeToggler i').classList.remove('fa-sun');
    document.querySelector('.modeToggler i').classList.add('fa-moon');
    document.querySelector('.modeToggler i').style.color = '#0075ff';
  } else {
    document.querySelector('.modeToggler i').classList.remove('fa-moon');
    document.querySelector('.modeToggler i').classList.add('fa-sun');
    document.querySelector('.modeToggler i').style.color = 'black';
  }

  // To toggle between modes
  document.querySelector(':root').classList.toggle('dark');
}

// Typing animation for home section
var typed = new Typed('#animation', {
  strings: [
    "a Passionate Learner",
    "Learning Full-Stack Web Development",
    "an IT Aspirant",
    "a Front-end Development Enthusiast"
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000
});

// Making the nav link to be active onscroll

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navLink');

window.onscroll = () => {
  scrollToTopShow(), scrollSpy()
}

function scrollSpy() {
  section.forEach((sec) => {

    let top = window.scrollY;
    let offset = sec.offsetTop - 170;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      });
    }

  });
}

// To show or hide the scrollToTop button
function scrollToTopShow() {
  if (window.pageYOffset < 500 || document.documentElement.scrollTop < 500) {
    document.querySelector('.scrollToTop').style.visibility = 'hidden';
  } else {
    document.querySelector('.scrollToTop').style.visibility = 'visible';
  }
}

// Scrolling to top onclick of ScrollToTop button
document.querySelector('.scrollToTop').onclick = () => {
  document.documentElement.scrollTop = 0;
}