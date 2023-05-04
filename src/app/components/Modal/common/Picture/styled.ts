import styled from 'styled-components';

export const Wrapper = styled.div<{
  bgImage: string | undefined;
  error: boolean | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 30px;
  width: 250px;
  height: 250px;
  border: 4px solid ${({ error }) => (error ? '#FF3D71' : '#00d68f')};
  border-radius: 100%;
  background-color: #f7f9fc;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-position: center center;

  img {
    width: 100px;
    height: 100px;
  }
`;
