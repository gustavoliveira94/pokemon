import styled from 'styled-components';

import img from 'app/assets/images/pageBackground.png';

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
`;

export const Playground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
