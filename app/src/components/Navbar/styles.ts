import styled, { keyframes } from 'styled-components';

import { globalVariables, device } from '../../styles/variables';
import { StylesProps } from './index';

const fadeFromSide = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
    display: ${(props: StylesProps) => (props.sandwichMenuSelected ? 'flex' : 'none')};
    width: 60px;
    min-width: 60px;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation: ${fadeFromSide} 0.3s;
  }
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
