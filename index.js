const DETAIL_ERROR_CLASS_NAME = 'detail--error';

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