function renderDetail({ input, onInputChange }) {
  const { label, value } = input;

  const detailDiv = document.createElement('div');
  detailDiv.classList.add('detail');

  const detailLabel = document.createElement('label');
  detailLabel.htmlFor = label;
  detailLabel.innerText = label;

  const detailSpan = document.createElement('span');
  detailSpan.innerText = 'Please enter name';

  const detailInput = document.createElement('input');
  detailInput.type = 'text';
  detailInput.name = label;
  detailInput.id = label;
  detailInput.value = value;
  detailInput.onchange = () => { onInputChange(detailInput) };

  detailDiv.append(detailLabel, detailSpan, detailInput);

  return detailDiv;
}