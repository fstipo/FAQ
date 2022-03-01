const btns = document.querySelectorAll('span');
const answer = document.querySelector('.answer');
const p = document.querySelector('p');

const showAnswer = () => {
  answer.style.display = 'flex';
  p.style.marginBottom = '2rem';
};

btns.forEach((el) => {
  el.addEventListener('click', () => {
    answer.style.display = 'flex';
    p.style.marginBottom = '2rem';
  });
  console.log(el);
  //   btn.addEventListener('click', showAnswer);
});
