import {iosVhFix} from './utils/ios-vh-fix';
import {changeTitleText} from './modules/text';
import {findVideos} from './modules/video';
import {selectTab, removeNojsClass, tubsContent, tubsTitles} from './modules/tubs';
import './modules/swiper';
import {validatePhoneInput} from './modules/form-validation';
import {setFeedbackListHeight} from './modules/feedback';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  changeTitleText();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    findVideos();
    selectTab();
    removeNojsClass(tubsTitles);
    removeNojsClass(tubsContent);
    validatePhoneInput();
    setFeedbackListHeight();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
