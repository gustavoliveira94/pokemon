import styled from 'styled-components';

export const Person = styled.div<{ loading: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  #ballon {
    visibility: ${({ loading }) => (loading ? 'visible' : 'hidden')};
    opacity: ${({ loading }) => (loading ? '1' : '0')};
    top: -70px;
    position: absolute;
  }

  :hover {
    #ballon {
      visibility: visible;
      opacity: 1;
      transition: all 0.3s ease;
      will-change: top;
      top: -70px;
    }
  }
`;
