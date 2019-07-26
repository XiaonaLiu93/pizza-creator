const DETAIL_ERROR_CLASS_NAME = 'detail--error';
const SIZE_ACTIVE_CLASS_NAME = 'size--active';

function getDetailNode(element) {
  return element.closest('.detail');
}

function removeErrorMessage(element) {
  element.classList.remove(DETAIL_ERROR_CLASS_NAME);
}

function showErrorMessage(element) {
  element.classList.add(DETAIL_ERROR_CLASS_NAME);
}

function changeErrorStatus(element) {
  const parentNode = getDetailNode(element);
  const isEmpty = (element.value === '');

  if (!isEmpty) {
    removeErrorMessage(parentNode);
    return;
  }
  
  showErrorMessage(parentNode);
}

function focusOutFromInput(element) {
  changeErrorStatus(element);
}

function focusInToInput(element) {
  const parentNode = getDetailNode(element);
  const isError = parentNode.classList.contains(DETAIL_ERROR_CLASS_NAME);

  if (!isError) {
    return;
  }

  removeErrorMessage(parentNode);
}

function clickSubmit() {
  const arr = ["name", "email", "confirmEmail", "address", "postcode", "contactNumber"];
  let hasValue = false;

  arr.forEach((element) => {
    const inputNode = document.querySelector(`#${element}`);
    const isEmpty = (inputNode.value === '');
    
    changeErrorStatus(inputNode);

    if (isEmpty) {
      hasValue = false;
    } else {
      hasValue = true;
    }
  });

  if (hasValue) {
    console.log("All filled up!");
  }
}

function activateSize(element) {
  element.classList.add(SIZE_ACTIVE_CLASS_NAME);
}

function addSizeToSummary(element) {
  const summaryItem = document.createElement('li');
  summaryItem.classList.add('item');

  const { name, price } = element.dataset;
  const nameSpan = document.createElement('span');
  nameSpan.classList.add('item__name');
  nameSpan.innerText = `${name} pizza`;

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('item__price')
  priceSpan.innerText = `$${price}`;

  summaryItem.append(nameSpan, priceSpan);
  document.querySelector('.items').prepend(summaryItem);
}

function addSizeToTotal(element) {
  const { price } = element.dataset;
  const total = document.querySelector('.total__amount');
  total.innerText = parseFloat(total.innerText) + parseFloat(price);
}

function selectSize(element) {
  activateSize(element);
  addSizeToSummary(element);
  addSizeToTotal(element);
}

function deactivateSize(element) {
  element.classList.remove(SIZE_ACTIVE_CLASS_NAME);
}

function removeSizeFromSummary(element) {
  const { name } = element.dataset;

  document.querySelectorAll('.item').forEach((item) => {
    if ( item.querySelector('.item__name').innerHTML !== `${name} pizza`) {
      return;
    }

    item.parentNode.removeChild(item);
  });
}

function minusSizeFromTotal(element) {
  const { price } = element.dataset;
  const total = document.querySelector('.total__amount');
  total.innerText = total.innerText - price;
} 

function unselectSize(element) {
  if (!element.classList.contains(SIZE_ACTIVE_CLASS_NAME)) {
    return;
  }

  deactivateSize(element);
  removeSizeFromSummary(element);
  minusSizeFromTotal(element);
}

function clickSize(element) {
  const isSelected = element.classList.contains(SIZE_ACTIVE_CLASS_NAME);

  if (isSelected) {
    return;
  }

  document.querySelectorAll('.size').forEach((size) => {
    if (size === element) {
      selectSize(element);
      return;
    }

    unselectSize(size);
  });
}