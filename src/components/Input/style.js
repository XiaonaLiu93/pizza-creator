import styled from 'styled-components';

export const InputNoError = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  color: rgba(0,0,0,0.6);

  & > label {
    font-size: 12px;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  & > span {
    visibility: hidden;
  }

  & > input {
    font-size: 18px;
    padding: 10px 15px;
    border: 1px solid #aeaeae;
    outline: none;
    grid-column: 1 / 3;
  }

  & > input:focus {
    box-shadow: 0 0 0 2px #1a98e18e;
    border: 1px solid #1a98e1;
  }

  & > input:hover {
    border: 1px solid #1a98e1;
  }
`;

export const InputError = styled(InputNoError)`
  color: rgba(255, 0, 0, 1);

  & > label {
    color: rgba(255,0,0,1);
  }

  & > span {
    visibility: visible;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  & > input {
    border: 1px solid #ff0000;
  }
`;
