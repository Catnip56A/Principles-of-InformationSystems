// Mobile nav toggle (keeps aria-expanded in sync)
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  // Keep simple: toggle inline display for mobile
  if(mainNav){
    mainNav.style.display = expanded ? 'none' : 'block';
  }
});
