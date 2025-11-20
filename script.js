// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle && navToggle.addEventListener('click', () => {
  const shown = mainNav.style.display === 'block';
  mainNav.style.display = shown ? 'none' : 'block';
});

// Simple contact form handler (no backend) - display a friendly message
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if(!name || !email){
      status.textContent = 'Please provide name and email.';
      status.style.color = 'crimson';
      return;
    }
    status.style.color = 'green';
    status.textContent = `Thanks, ${name}! Your message was noted (demo).`;
    form.reset();
  });
}
