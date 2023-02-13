const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const cardBody = document.querySelector('.card-body');

let index = 0;
const content = ['Card Content 1', 'Card Content 2', 'Card Content 3'];

btnPrev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = content.length - 1;
  }
  cardBody.innerHTML = `<p>${content[index]}</p>`;
});

btnNext.addEventListener('click', () => {
  index++;
  if (index >= content.length) {
    index = 0;
  }
  cardBody.innerHTML = `<p>${content[index]}</p>`;
});