import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    position: absolute;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #2e3a59;
    padding: 12px;
    background-color: #f7f9fc;
    text-transform: uppercase;
  }

  hr {
    width: 100%;
  }
`;
