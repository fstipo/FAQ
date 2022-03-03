const toggles = document.querySelectorAll('button');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', (el) => {
    toggle.parentNode.classList.toggle('active');
  });
});
