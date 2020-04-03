import styled from 'styled-components';

import { globalVariables } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${globalVariables.ligthGrey};
  position: relative;
`;

export const AddTransactionContainer = styled.div`
  position: absolute;
  right: 2em;
  bottom: 2em;
  background: ${globalVariables.ligthBlue};
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 1.5px 1.5px 10px 0 rgba(0,0,0,0.3);
  transition: all 0.3s;

  &:hover {
    background: ${globalVariables.ligthBlueHover};
    margin-bottom: 3px;
  }
`;

export const PlusText = styled.p`
  &::before {
    content: "+";
    font-size: 40px;
    color: ${globalVariables.white};
  }
`;

AddTransactionContainer.displayName = 'AddTransactionContainer';
