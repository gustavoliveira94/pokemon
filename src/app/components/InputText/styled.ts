import styled from 'styled-components';

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const Error = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #ff3d71;
`;

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 1.2rem 0 1.2rem 0.8rem;
  background: #ffffff;
  border: ${({ error }) => (error ? '2px solid #FF3D71' : '2px solid #e4e9f2')};
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:focus,
  &:active {
    border-color: #598bff;
  }

  &::placeholder {
    color: #c5cef4;
    font-weight: 400;
  }
`;
