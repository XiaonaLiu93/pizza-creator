import renderSubmitButton from './renderSubmitButton';
import renderResetButton from './renderResetButton';

export default function renderButtons({ onSubmitButtonClick, onResetButtonClick }) {
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  
  const submitButton = renderSubmitButton({ onSubmitButtonClick });
  const resetButton= renderResetButton({ onResetButtonClick });

  buttons.append(submitButton, resetButton);

  return buttons;
}