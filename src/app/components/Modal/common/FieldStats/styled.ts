import styled from 'styled-components';

export const Stats = styled.div`
  .items {
    margin-top: 30px;
    height: 250px;

    p {
      font-family: 'Open Sans';
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      color: #2e3a59;

      img {
        margin-right: 10px;
      }
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 15px;
    margin-right: 12px;
  }
`;

export const Result = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: right;
  color: #2e3a59;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
