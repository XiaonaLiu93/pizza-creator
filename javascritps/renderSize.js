function renderSize({ size, selectedSize, onSizeClick }) {
  const SIZE_ACTIVE_CLASS_NAME = 'size--active';

  const { name, inch } = size;

  const sizeDiv = document.createElement('div');
  sizeDiv.classList.add('size');
  sizeDiv.classList.add(`sizes__${name}`);
  sizeDiv.onclick = () => onSizeClick(name);

  const isSelected = (name === selectedSize.name);

  function activateSize(element) {
    element.classList.add(SIZE_ACTIVE_CLASS_NAME);
  }
  
  if (isSelected) {
    activateSize(sizeDiv);
  }

  const sizeImg = document.createElement('img');
  sizeImg.src = './assets/size/pizza.png';
  sizeImg.alt = name;

  const nameSpan = document.createElement('span');
  nameSpan.innerText = `${name} (${inch}")`;

  sizeDiv.append(sizeImg, nameSpan);

  return sizeDiv;
}