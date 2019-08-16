import styled from 'styled-components';

export const ErrorShown = styled.section`
  position: fixed;
  background-color: white;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2rem;
  margin: 0;
  box-shadow: 0 0 0.5rem 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem; 
  align-items: center;

  & > img {
    height: 1.5rem;
  }
`;

export const ErrorHidden = styled(ErrorShown)`
  visibility: hidden;
`;
