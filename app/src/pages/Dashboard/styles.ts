import styled from 'styled-components';

import { globalVariables, device } from '../../styles/variables';

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
  background: ${globalVariables.mainGreen};
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
    background: ${globalVariables.mainGreenHover};
    margin-bottom: 3px;
  }

  @media ${device.laptop} {
    height: 60px;
    width: 60px;
  }

  @media ${device.tabletG} {
    height: 50px;
    width: 50px;
  }

  @media ${device.mobileG} {
    height: 40px;
    width: 40px;

    right: 1.5em;
    bottom: 1.5em;
  }
`;

export const PlusText = styled.p`
  &::before {
    content: "+";
    font-size: 40px;
    color: ${globalVariables.white};

    @media ${device.mobileG} {
      font-size: 35px;
    }

    @media ${device.mobileG} {
      font-size: 30px;
    }
  }
`;

AddTransactionContainer.displayName = 'AddTransactionContainer';
