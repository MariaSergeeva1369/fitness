const feedbackButtons = document.querySelectorAll('[data-feedback-button]');
const feedbackList = document.querySelector('[data-feedback-list]');

const setFeedbackListHeight = () => {
  if (feedbackList) {
    const activeFeedbackSlide = document.querySelector('.feedback__item.swiper-slide-active');
    let slideHeight = activeFeedbackSlide.clientHeight;
    feedbackList.style.height = `${slideHeight}px`;
  }
};

if (feedbackButtons) {
  for (let i = 0; i < feedbackButtons.length; i++) {
    const feedbackButton = feedbackButtons[i];
    feedbackButton.addEventListener('click', setFeedbackListHeight);
  }
}

export {setFeedbackListHeight};
