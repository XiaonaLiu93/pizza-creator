function renderSelectYourSize({ state }) {
  const selectYourSize = document.createElement('div');

  const selectYourSizeTitle = renderTitle({ title: 'Select your size' });
  const selectYourSizeContent = renderSizes({ state });
  
  selectYourSize.append(selectYourSizeTitle, selectYourSizeContent);

  return selectYourSize;
}