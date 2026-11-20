document.documentElement.classList.add('js-motion');

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

const year = document.querySelector('#year');
year.textContent = String(new Date().getFullYear());

const profilePhoto = document.querySelector('.profile-photo');
function showProfilePhoto() {
  profilePhoto.classList.add('is-ready');
  document.querySelector('.hero-art').classList.add('has-photo');
}
profilePhoto.addEventListener('load', showProfilePhoto);
if (profilePhoto.complete && profilePhoto.naturalWidth > 0) showProfilePhoto();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section-heading, .about-grid, .focus-card, .project-card, .journey-grid, .contact-wrap').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

const cvLink = document.querySelector('.cv-placeholder');
if (cvLink && cvLink.getAttribute('href') === '#') {
  cvLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.alert('The CV link has not been added yet.');
  });
}
