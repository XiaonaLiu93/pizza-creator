const DETAIL_ERROR_CLASS_NAME = 'detail--error';
const SIZE_ACTIVE_CLASS_NAME = 'size--active';
const TOPPING_ACTIVE_CLASS_NAME = 'topping--active';

function toFixed(num, s) {
  let times = Math.pow(10, s);
  let result = num * times + 0.5;
  result = parseInt(result, 10) / times;
  return result;
}

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
  total.innerText = toFixed(parseFloat(total.innerText) + parseFloat(price), 2);
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
  total.innerText = toFixed(total.innerText - price, 2);
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

function getToppingNode(element) {
  return element.closest('.topping');
}

function getToppingAmountNode(element) {
  return element.closest('.topping__amount');
}

function changeAmountOnSummary(element) {
  const toppingNode = getToppingNode(element);
  const { name, amount, price } = toppingNode.dataset;
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    if (item.querySelector('.item__name').innerHTML !== name) {
      return;
    }

    item.querySelector('.item__amount').innerText = amount;
    item.querySelector('.item__price').innerText = `$${toFixed(amount * price, 2)}`;
  });
}

function deactivateTopping(element) {
  const toppingNode = getToppingNode(element);
  toppingNode.classList.remove(TOPPING_ACTIVE_CLASS_NAME);
}

function removeToppingFromSummary(element) {
  const toppingNode = getToppingNode(element);
  const { name } = toppingNode.dataset;

  document.querySelectorAll('.item').forEach((item) => {
    if ( item.querySelector('.item__name').innerHTML !== name) {
      return;
    }

    item.parentNode.removeChild(item);
  });
}

function lastTimeMinusClick(element) {
  deactivateTopping(element);
  removeToppingFromSummary(element);
}

function minusAmountOnTopping(element, toMinus) {
  const toppingAmountNode = getToppingAmountNode(element);
  const toppingNode = getToppingNode(element);
  let amount = 0;
  amount = toppingAmountNode.querySelector('span').innerText - toMinus;
  toppingNode.dataset.amount = amount;
  toppingAmountNode.querySelector('span').innerText = amount;
}

function minusAmount(element, toMinus) {
  minusAmountOnTopping(element, toMinus);
  changeAmountOnSummary(element); //minus
}

function minusFromTotal(element) {
  const toppingNode = getToppingNode(element);
  const { price } = toppingNode.dataset;
  const total = document.querySelector('.total__amount');
  total.innerText = toFixed(total.innerText - price, 2);
}

function fullTimeMinusClick(element, toMinus) {
  minusAmount(element, toMinus);
  minusFromTotal(element);
}

function clickMinusOnTopping(element, toMinus) {
  const toppingNode = getToppingNode(element);
  const { amount: afterMinusAmount } = toppingNode.dataset;

  if (parseFloat(afterMinusAmount) === 0) {
    return;
  }

  if (parseFloat(afterMinusAmount) === 1) {
    lastTimeMinusClick(element);
  }

  fullTimeMinusClick(element, toMinus);
}

function activateTopping(element) {
  const toppingNode = getToppingNode(element);
  toppingNode.classList.add(TOPPING_ACTIVE_CLASS_NAME);
}

function addToppingToSummary(element) {
  const summaryItem = document.createElement('li');
  summaryItem.classList.add('item');

  const toppingNode = getToppingNode(element);
  const { name, price } = toppingNode.dataset;

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('item__name');
  nameSpan.innerText = name;

  const minusButton = document.createElement('button');
  minusButton.classList.add('item__button__minus');
  minusButton.innerText = '-';
  minusButton.onclick = () => {
    let toMinus = 1;
    clickMinusOnTopping(element, toMinus);
  };

  const amountNumSpan = document.createElement('span');
  amountNumSpan.classList.add('item__amount');
  amountNumSpan.innerText = '1';

  const addButton = document.createElement('button');
  addButton.classList.add('item__button__add');
  addButton.innerText = '+';
  addButton.onclick = () => {
    let toAdd = 1;
    clickAddOnTopping(element, toAdd);
  };

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('item__price')
  priceSpan.innerText = `$${price}`;

  summaryItem.append(nameSpan, minusButton, amountNumSpan, addButton, priceSpan);
  document.querySelector('.items').append(summaryItem);
}

function firstTimeAddClick(element) {
  activateTopping(element);
  addToppingToSummary(element);
}

function addAmountOnTopping(element, toAdd) {
  const toppingAmountNode = getToppingAmountNode(element);
  const toppingNode = getToppingNode(element);
  let amount = 0;
  amount = parseFloat(toppingAmountNode.querySelector('span').innerText) + toAdd;
  toppingNode.dataset.amount = amount;
  toppingAmountNode.querySelector('span').innerText = amount;
}

function addAmount(element, toAdd) {
  addAmountOnTopping(element, toAdd);
  changeAmountOnSummary(element);
}

function addToTotal(element) {
  const toppingNode = getToppingNode(element);
  const { price } = toppingNode.dataset;
  const total = document.querySelector('.total__amount');
  total.innerText = toFixed((parseFloat(total.innerText) + parseFloat(price)), 2);
}

function fullTimeAddClick(element, toAdd) {
  addAmount(element, toAdd);
  addToTotal(element);
}

function clickAddOnTopping(element, toAdd) {
  const toppingNode = getToppingNode(element);
  const { amount: beforeAddAmount } = toppingNode.dataset;

  if (parseFloat(beforeAddAmount) === 0) {
    firstTimeAddClick(element);
  }

  fullTimeAddClick(element, toAdd);
}