import styled from 'styled-components';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 100px auto 20px auto 1fr;
  margin-bottom: 3px;

  & > span {
    font-size: 16px;
    color: rgba(0,0,0,0.7);
    text-transform: capitalize;
    padding: 2px;
  }
`;

export const ItemPrice = styled.span`
  position: absolute;
  right: 20px;
`;
