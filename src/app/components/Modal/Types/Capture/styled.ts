import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #2e3a59;
  margin-bottom: 35px;
  text-transform: uppercase;
`;

export const Pokeball = styled.div`
  position: sticky;
  bottom: 40px;
  display: flex;
  justify-content: center;

  img {
    cursor: pointer;
  }
`;
