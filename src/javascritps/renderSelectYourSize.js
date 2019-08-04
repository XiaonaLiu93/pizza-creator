import renderTitle from './renderTitle';
import renderSizes from './renderSizes';

export default function renderSelectYourSize({ state, onSizeClick }) {
  const selectYourSize = document.createElement('div');

  const selectYourSizeTitle = renderTitle({ title: 'Select your size' });
  const selectYourSizeContent = renderSizes({ state, onSizeClick });
  
  selectYourSize.append(selectYourSizeTitle, selectYourSizeContent);

  return selectYourSize;
}