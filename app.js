const btns = document.querySelectorAll('span');
let box = document.querySelector('.box');

btns.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    const parentEl = el.target.parentNode.parentNode.parentNode;

    parentEl.classList.toggle('active');
    const clEl = btn.firstElementChild.getAttribute('class');
    console.log(clEl);

    // btn.removeChild(btn.firstElementChild);
  });
});
