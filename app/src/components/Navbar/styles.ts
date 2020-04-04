import styled from 'styled-components';

import { globalVariables, device } from '../../styles/variables';
import { StylesProps } from './index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  background: ${globalVariables.mainBlue};
  color: ${globalVariables.white};

  @media ${device.laptop} {
    min-width: 150px;
  }

  @media ${device.mobileM} {
    opacity: 0;
  }
`;

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
    width: 30px;
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
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: ${globalVariables.mainBlue};
  box-shadow: 1.5px 1.5px 10px 0 rgba(0,0,0,0.3);
`;

export const PagesList = styled.ul`

`;

export const Page = styled.li`
  height: 4em;
  border: 1px solid ${globalVariables.mainBlueHover};
  transition: all 0.3s;
  background: ${(props: StylesProps) => (props.selected ? `${globalVariables.mainBlueHover}` : 'transparent')};

  &:hover {
    background: ${globalVariables.mainBlueHover};
  }

  & > a {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s;
    color: ${(props: StylesProps) => (props.selected ? `${globalVariables.white}` : `${globalVariables.navbarIcon}`)};
    border-left: ${(props: StylesProps) => (props.selected ? `2px solid ${globalVariables.mainGreen}` : 'none')};

    &:hover {
      color: ${globalVariables.white};
    }

    p {
      font-size: 1.2em;
      margin-right: 35px;

      @media ${device.laptop} {
        font-size: 1em;
        margin-right: 20px;
      }

      @media ${device.tablet} {
        font-size: 0.85em;
      }
    }

    svg {
      font-size: 1.5em;
      margin-left: 15px;
    }
  }
`;

export const Logout = styled.button`
  background: transparent;
  color: ${globalVariables.navbarIcon};
  border: 1px solid ${globalVariables.mainBlueHover};
  height: 5.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: ${globalVariables.mainBlueHover};
    color: ${globalVariables.white};
  }

  p {
    font-size: 1.9em;
    margin-right: 35px;

    @media ${device.laptop} {
      font-size: 1.6em;
      margin-right: 20px;
    }

    @media ${device.tablet} {
      font-size: 1.4em;
    }
  }

  svg {
    font-size: 2.5em;
    margin-left: 15px;
  }
`;

PagesList.displayName = 'PagesList';
Logout.displayName = 'Logout';
