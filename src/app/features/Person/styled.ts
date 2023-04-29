import styled from 'styled-components';

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  #ballon {
    visibility: hidden;
    opacity: 0;
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
