function renderSubmitButton({ onSubmitButtonClick }) {
  const submitButton = document.createElement('button');
  submitButton.classList.add('buttons__submit');
  submitButton.innerText = 'Place Order';
  submitButton.onclick = onSubmitButtonClick;

  return submitButton;
}