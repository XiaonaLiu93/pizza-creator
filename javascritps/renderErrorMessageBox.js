function renderErrorMessageBox() {
  const errorMessageBox = document.createElement('div');
  errorMessageBox.classList.add('message');
  errorMessageBox.classList.add('message--hidden');

  const errorMessageImage = document.createElement('img');
  errorMessageImage.src = './assets/error/error.png';
  errorMessageImage.alt = 'error';

  const errorMessageSpan = document.createElement('span');
  errorMessageSpan.innerText = 'Please choose at least one topping.';

  errorMessageBox.append(errorMessageImage, errorMessageSpan);

  return errorMessageBox;
}