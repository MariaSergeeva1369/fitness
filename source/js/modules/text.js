const mainTitle = document.querySelector('[data-main-title]');

const changeTitleText = () => {
  if (mainTitle && window.innerWidth <= 1199) {
    mainTitle.textContent = 'Фитнес центр';
  } else if (mainTitle && window.innerWidth >= 1199) {
    mainTitle.textContent = 'ФИТНЕС ЦЕНТР';
  }
};

window.addEventListener('resize', () => {
  changeTitleText();
});

export {changeTitleText};
