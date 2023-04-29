import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  height: 100%;

  button {
    margin-top: 30px;
    width: 124px;
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31))
      drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));

    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
