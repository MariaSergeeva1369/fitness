const tubsTitles = document.querySelectorAll('[data-tubs-title]');
const tubsContent = document.querySelectorAll('[data-tubs-list]');

const removeNojsClass = (elements) => {
  if (elements.length >= 1) {
    elements.forEach((element) => {
      element.classList.remove('is-nojs');
    });
  }
};

const selectTab = () => {
  if (tubsTitles.length >= 1) {
    for (let i = 0; i < tubsTitles.length; i++) {
      const tubTitle = tubsTitles[i];
      const tubContent = tubsContent[i];
      tubTitle.addEventListener('click', (evt) => {
        evt.preventDefault();
        tubsTitles.forEach((tub) => {
          tub.classList.remove('is-active');
        });
        tubsContent.forEach((content) => {
          content.classList.remove('is-active');
        });
        tubTitle.classList.add('is-active');
        tubContent.classList.add('is-active');
      });
    }
  }
};

export {selectTab, removeNojsClass, tubsContent, tubsTitles};
