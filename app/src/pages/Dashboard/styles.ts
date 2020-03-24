import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #F4F4F4;
  position: relative;
`;

export const AddTransactionContainer = styled.div`
  position: absolute;
  right: 2em;
  bottom: 2em;
  background: #1D84B5;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 1.5px 1.5px 10px 0 rgba(0,0,0,0.3);
  transition: all 0.5s;

  &:hover {
    background: #17729C;
    margin-bottom: 4px;
  }
`;

export const PlusText = styled.p`
  &::before {
    content: "+";
    font-size: 40px;
    color: #FFF;
  }
`;

AddTransactionContainer.displayName = 'AddTransactionContainer';
