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

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

if(galleryItems.length > 0 && modal){
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.src;
      if(src){
        modalImage.src = src;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      }
    });
    // Keyboard support (Enter/Space)
    item.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        item.click();
      }
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  };
  modalClose && modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
  });
  // Escape key
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('active')){
      closeModal();
    }
  });
}

