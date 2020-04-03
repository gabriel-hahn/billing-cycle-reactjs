import styled from 'styled-components';

import { globalVariables } from '../../styles/variables';
import { StylePropsInterface } from './index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DatePicker = styled.div`
  position: absolute;
  box-shadow: 1.5px 1.5px 10px 0 rgba(0,0,0,0.3);
`;

export const ContainerDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  height: 1.8em;
`;

export const CategoryHead = styled.th`
  text-align: end !important;
`;

export const OptionButton = styled.button`
  background: ${globalVariables.darkGrey};
  color: ${globalVariables.white};
  border-radius: 5px;
  border: none;
  width: 5em;
  height: 100%;
  font-size: 1em;
  margin-right: 5px;
  transition: all 0.3s;

  &:hover {
    background: ${globalVariables.darkGreyHover};
  }
`;

export const PaginationButton = styled(OptionButton)`
  width: 6em;
  background: ${(props: StylePropsInterface) => (props.disabled ? `${globalVariables.darkGrey}` : `${globalVariables.darkGrey}`)};
  pointer-events: ${(props: StylePropsInterface) => (props.disabled ? 'none' : 'all')};
`;

export const ContainerTable = styled.table`
  background: ${globalVariables.white};
  width: 100%;
  border-radius: 5px;
  border-collapse: collapse;
  font-size: 1em;

  tbody {
    max-height: 45vh;

    td, th {
      font-size: 1em;
      font-weight: 100;
      border: 1px solid #ddd;
      padding: 8px;
      color: #171717;
      height: 12px;
    }

    th {
      text-align: left;
      background-color: ${globalVariables.darkGrey};
      color: white;
    }

    tr:nth-child(even){
      background-color: ${globalVariables.ligthGrey};
    }

    tr:hover {
      background-color: #dbdbdb;
    }

    td:nth-of-type(1) {
      width: 60%;
    }

    td:nth-of-type(2),
    td:nth-of-type(3) {
      width: 15%;
    }

    td:nth-of-type(4),
    td:nth-of-type(5) {
      width: 5%;
    }
  }
`;

export const CategoryColumn = styled.td`
  text-align: center;

  & > * {
    font-size: 16px;
    color: ${(props: StylePropsInterface) => (props.credit ? `${globalVariables.mainGreen}` : `${globalVariables.ligthPink}`)};
  }
`;

export const ActionsButton = styled.div`
  height: 1.2em;
  width: 2.6em;
  font-size: 14px;
  color: ${globalVariables.mainBlueLigth};
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  transition: all 0.3s;

  & > :hover {
    color: ${globalVariables.mainBlueLigthHover};
  }
`;
