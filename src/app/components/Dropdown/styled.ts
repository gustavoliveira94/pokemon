import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
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

export const DropdownContent = styled.div`
  position: relative;
`;

export const Item = styled.p`
  background-color: #c5cee0;
  padding: 4px 6px;
  font-weight: 600;
  font-size: 15px;
  color: #2e3a59;
  border-radius: 15px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  text-transform: lowercase;

  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  width: 100%;
  font-weight: 400;
  font-size: 1.6rem;
  padding: 1.2rem 0 1.2rem 0.8rem;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  appearance: none;
  color: #c5cef4;

  &:focus,
  &:active {
    border-color: #598bff;
  }
`;

export const DropdownOption = styled.option`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #c5cef4;
`;

export const DropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 2.5rem;
  height: auto;
  pointer-events: none;
`;

export const Items = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  padding: 0 12px;
  transform: translateY(-50%);
  width: 2.5rem;
  height: auto;
  pointer-events: none;
  display: flex;
  align-items: center;
`;
