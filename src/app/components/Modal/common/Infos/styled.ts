import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 33.33%;

    &:not(:last-child) {
      border-right: 1px solid #c5cee0;
    }

    small {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      color: #2e3a59;
      margin-bottom: 8px;
    }

    p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      text-align: center;
      color: #2e3a59;
    }
  }
`;
