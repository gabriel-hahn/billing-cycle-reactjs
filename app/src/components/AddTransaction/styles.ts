import styled from 'styled-components';

export const Container = styled.div`
  background: #1D84B5;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusText = styled.p`
  &::before {
    content: "+";
    font-size: 40px;
    color: #FFF;
  }
`;
