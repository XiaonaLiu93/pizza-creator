function renderEnterYourDetails({ state, onInputChange }) {
  const enterYourDetails = document.createElement('div');

  const enterYourDetailsTitle = renderTitle({ title: 'Enter your details' });
  const enterYourDetailsDContent = renderDetails({ state, onInputChange });

  enterYourDetails.append(enterYourDetailsTitle, enterYourDetailsDContent);
  
  return enterYourDetails;
}