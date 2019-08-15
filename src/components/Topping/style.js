import styled from 'styled-components';

export const ToppingDeactivated = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 2rem 2.6rem 2rem;
  align-items: center;
  cursor: pointer;
  background: rgba(0,0,0,0.05);
  border-radius: 3px;

  :hover {
    background: #1a98e1;

    & span, button {
      color: #ffffff;
    }
  }

  & > img {
    width: 40px;
    height: 42px;
    background: #e6e6e6;
    border: 0;
  }

  & > span {
    padding: 0 14px;
    font-size: 16px;
    text-transform: capitalize;
  }

  & > button {
    border: 0;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    outline: 0;
    cursor: pointer;

    :hover {
      background-color: #1a98e1;
      color: white;
    }
  }
`;

export const ToppingActivated = styled(ToppingDeactivated)`
  background-color: #1a98e1;

  & > span {
    color: #ffffff;
  }

  & > button {
    color: #ffffff;
  }
`;