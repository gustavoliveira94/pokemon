import styled from 'styled-components';

export const Types = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  border-radius: 40px;
`;

export const Type = styled.p<{ color: string }>`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background-color: ${({ color }) => color};
  border-radius: 42px;
  padding: 8px 16px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
