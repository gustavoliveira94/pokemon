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
  position: relative;

  img {
    position: absolute;
    margin-left: 28px;
    cursor: pointer;
  }
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

export const DropPokemon = styled.div`
  position: sticky;
  bottom: 40px;
  display: flex;
  justify-content: center;

  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31))
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
`;

export const EditName = styled.div`
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31))
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
  margin-bottom: 24px;

  button.icon {
    width: 48px;
    height: 48px;
    background: #edf1f7;
    border-radius: 4px;
    border: none;

    :not(:last-child) {
      margin: 0 8px;
    }
  }
`;
