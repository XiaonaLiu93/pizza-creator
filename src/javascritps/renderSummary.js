import renderTitle from './renderTitle';
import renderSummaryContent from './renderSummaryContent';

export default function renderSummary({ state, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const summary = document.createElement('div');

  const summaryTitle = renderTitle({ title: 'Summary' });
  const summaryContent = renderSummaryContent({ state, onDecreaseButtonClick, onIncreaseButtonClick });

  summary.append(summaryTitle, summaryContent);
  
  return summary;
}