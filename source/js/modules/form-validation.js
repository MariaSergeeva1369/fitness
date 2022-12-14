const phoneInputs = document.querySelectorAll('input[data-tel-input]');
const phoneInvalidMassage = document.createElement('span');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);
  const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';

  if (!inputNumbersValue) {
    input.value = '';
  }

  let formattedValue = firstSymbols;
  if (inputNumbersValue.length > 1) {
    formattedValue += inputNumbersValue.substring(1, 11);
  }

  input.value = formattedValue;
};

const onPhoneKeyDown = (evt) => {
  const phoneInput = evt.target;
  if (evt.key === 'Backspace' && getInputNumbersValue(phoneInput).length === 1) {
    phoneInput.value = '';
  }
};

function onPhoneChange(evt) {
  const phoneInput = evt.target;
  const phoneLabel = phoneInput.parentElement;
  const form = phoneLabel.parentElement;
  const formButton = form.querySelector('button[data-form-button]');

  if (getInputNumbersValue(phoneInput)[0].includes(8)) {
    if (phoneInput.value.length < 11) {
      formButton.setAttribute('disabled', 'disabled');
      phoneInvalidMassage.textContent = 'Введите номер полностью';
      phoneLabel.append(phoneInvalidMassage);
      phoneInput.classList.add('is-invalid');
    } else if (phoneInvalidMassage) {
      phoneInput.classList.remove('is-invalid');
      formButton.removeAttribute('disabled');
      phoneLabel.removeChild(phoneInvalidMassage);
    }
  } else {
    if (phoneInput.value.length < 12) {
      formButton.setAttribute('disabled', 'disabled');
      phoneInvalidMassage.textContent = 'Введите номер полностью';
      phoneLabel.append(phoneInvalidMassage);
      phoneInput.classList.add('is-invalid');
    } else if (phoneInvalidMassage) {
      phoneInput.classList.remove('is-invalid');
      formButton.removeAttribute('disabled');
      phoneLabel.removeChild(phoneInvalidMassage);
    }
  }
}

const validatePhoneInput = () => {
  if (phoneInputs.length >= 1) {
    for (let i = 0; i < phoneInputs.length; i++) {
      const phoneInput = phoneInputs[i];
      phoneInput.addEventListener('input', onPhoneInput);
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('change', onPhoneChange);
    }
  }
};

export {validatePhoneInput};
