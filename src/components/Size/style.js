import styled from 'styled-components';

export const SizeDeactivated = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;

  :hover > img {
    background-color: #dadada;
  }

  :hover > span {
    color:  #1a98e1;
  }

  & > img {
    --img-width: 60px; 
    padding: 8px; 
    border-radius: 50%; 
    width: ${({ name }) => {
    let width = 0;

    if (name === 'large') {
      width = 'calc(var(--img-width) * 1.2)';
    }

    if (name === 'medium') {
      width = 'var(--img-width)';
    }

    if (name === 'small') {
      width = 'calc(var(--img-width) * 0.8)';
    }

    return width;
  }}}

  & > span {
    text-transform: capitalize;
    color: rgba(0,0,0,0.7);
    padding: 0 6px 0 12px;
  }
`;

export const SizeActivated = styled(SizeDeactivated)`
  & > img {
    background-color: #dadada;
  }

  & > span {
    color:  #1a98e1;
  }
`;
