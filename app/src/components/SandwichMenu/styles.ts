import styled from 'styled-components';

import { globalVariables, device } from '../../styles/variables';
import { StylesProps } from './index';

export const SandwichIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 50px;

  & > span {
    display: block;
    border-radius: 5px;
    height: 3px;
    width: 25px;
    margin: ${(props: StylesProps) => (props.sandwichClicked ? '0' : '2px 0')};
    background: ${globalVariables.white};
    transition: all 0.3s;
  }

  & > span:nth-of-type(1) {
    position: ${(props: StylesProps) => (props.sandwichClicked ? 'absolute' : 'unset')};
    transform: ${(props: StylesProps) => (props.sandwichClicked ? 'rotate(-45deg)' : 'unset')};
  }

  & > span:nth-of-type(2) {
    opacity: ${(props: StylesProps) => (props.sandwichClicked ? '0' : '1')};
  }

  & > span:nth-of-type(3) {
    position: ${(props: StylesProps) => (props.sandwichClicked ? 'absolute' : 'unset')};
    transform: ${(props: StylesProps) => (props.sandwichClicked ? 'rotate(45deg)' : 'unset')};
  }
`;

export const SmallNavBarContainer = styled.div`
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${globalVariables.mainBlue};
  box-shadow: 1.5px 1.5px 10px 0 rgba(0,0,0,0.3);

  @media ${device.mobileM} {
    display: flex;
    position: fixed;
    bottom: 5em;
    right: 1em;
  }
`;
