import styled from 'styled-components';

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  border-radius: 40px;

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    background-color: #67af32;
    border-radius: 42px;
    padding: 8px 16px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
