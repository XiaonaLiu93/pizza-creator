function renderSelectYourSize() {
  const selectYourSize = document.createElement('div');

  const selectYourSizeTitle = renderTitle({ title: 'Select your size' });
  const selectYourSizeContent = renderSizes();
  
  selectYourSize.append(selectYourSizeTitle, selectYourSizeContent);

  return selectYourSize;
}