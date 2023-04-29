import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  position: relative;
  height: 560px;
  width: 360px;
  max-width: 360px;
  left: calc(50% - 360px / 2);
  top: calc(50% - 559px / 2 - 0.5px);
  background-color: #f7f9fc;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 180px;
  width: 360px;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  border-radius: 8px 8px 0 0;
`;

export const Content = styled.div`
  height: calc(100% - 200px);
  width: 100%;
  background-color: #f7f9fc;
  border-radius: 24px;
  margin-top: -30px;
  padding-top: 160px;
  padding: 160px 25px 0;
`;

export const Picture = styled.div`
  position: absolute;
  z-index: 2;
  top: 30px;
  width: 250px;
  height: 250px;
  border: 4px solid #00d68f;
  border-radius: 100%;
  background-color: #f7f9fc;
`;

export const Close = styled.button`
  position: absolute;
  z-index: 3;
  right: 12px;
  top: 12px;
  background-color: #f7f9fc;
  border: 2px solid #8f9bb3;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  img {
    margin: auto;
  }
`;
