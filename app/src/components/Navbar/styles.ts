import styled from 'styled-components';

import { globalVariables } from '../../styles/variables';
import { StylesProps } from './index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  background: ${globalVariables.mainBlue};
  color: ${globalVariables.white}
`;

export const PagesList = styled.ul`

`;

export const Page = styled.li`
  height: 4em;
  border: 1px solid ${globalVariables.mainBlueHover};
  transition: all 0.5s;
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
    transition: all 0.5s;
    color: ${(props: StylesProps) => (props.selected ? `${globalVariables.white}` : `${globalVariables.navbarIcon}`)};
    border-left: ${(props: StylesProps) => (props.selected ? `2px solid ${globalVariables.ligthBlue}` : 'none')};

    &:hover {
      color: ${globalVariables.white};
    }

    p {
      font-size: 1.2em;
      margin-right: 35px;
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
  transition: all 0.5s;

  &:hover {
    background: ${globalVariables.mainBlueHover};
    color: ${globalVariables.white};
  }

  p {
    font-size: 1.9em;
    margin-right: 35px;
  }

  svg {
    font-size: 2.5em;
    margin-left: 15px;
  }
`;

PagesList.displayName = 'PagesList';
Logout.displayName = 'Logout';
