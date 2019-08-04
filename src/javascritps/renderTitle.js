export default function renderTitle({ title }) {
  const titleH1 = document.createElement('h1');
  titleH1.innerText = title;

  return titleH1;
}