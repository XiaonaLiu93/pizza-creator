function renderResetButton({ onResetButtonClick }) {
  const resetButton = document.createElement('button');
  resetButton.classList.add('buttons__reset');
  resetButton.innerText = 'Reset Order';
  resetButton.onclick = onResetButtonClick;

  return resetButton;
}