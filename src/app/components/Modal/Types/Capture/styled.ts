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

export const Abilities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    color: #2e3a59;
  }
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
