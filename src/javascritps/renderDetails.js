import renderDetail from './renderDetail';

export default function renderDetails({ state, onInputChange }) {
  const detailsFrom = document.createElement('form');
  detailsFrom.classList.add('details');

  const { inputs } = state;

  const detailDivs= inputs.map((input) => renderDetail({ input, onInputChange }));
  detailsFrom.append(...detailDivs);

  return detailsFrom;
}