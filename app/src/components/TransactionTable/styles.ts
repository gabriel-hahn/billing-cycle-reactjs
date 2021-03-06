import styled from 'styled-components';

import { globalVariables, device } from '../../styles/variables';
import { StylePropsInterface } from './index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileG} {
    width: 30em;
    height: 33vh;
    display: flex;
    align-items: center;
  }

  @media ${device.mobileL} {
    margin: 0 0.8em;
    width: 20em;
  }
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

  @media ${device.laptop} {
    margin-bottom: unset;
  }

  @media ${device.mobileG} {
    display: none;
  }
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

  @media ${device.laptop} {
    height: 80%;
    font-size: 0.9em;
  }

  @media ${device.tabletG} {
    height: 70%;
    font-size: 0.8em;
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

  @media ${device.mobileG} {
    display: none;
  }

  tbody {
    max-height: 45vh;

    td, th {
      font-size: 1em;
      font-weight: 100;
      border: 1px solid #ddd;
      padding: 8px;
      color: #171717;
      height: 12px;

      @media ${device.laptopL} {
        padding: 7px;
      }

      @media ${device.laptop} {
        padding: 6px;
        font-size: 0.8em;
      }

      @media ${device.tabletG} {
        padding: 5.2px;
        font-size: 0.65em;
      }
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
    color: ${(props: StylePropsInterface) => (props.credit ? `${globalVariables.mainGreen}` : `${globalVariables.mainBlueLigthHover}`)};
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

export const SmallTableContainer = styled.div`
  background-color: ${globalVariables.white};
  width: 15em;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1);
  display: none;
  margin: 0 0.8em 1em;

  @media ${device.mobileG} {
    display: block;
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 15em;
  }
`;

export const SmallTableText = styled.p`
  font-size: 14px;
  margin: 10px;
  height: 20px;
  text-align: center;
  color: #3e3e3e;
`;

export const SmallTableItemContainer = styled.div`
  margin-left: 5px;
`;

export const SmallTableItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px 10px 8px;
`;

export const SmallTableDescription = styled.p`
  color: ${globalVariables.fontGrayColor};
  font-size: 14px;;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 120px;
`;

export const SmallTableDate = styled.p`
  color: ${globalVariables.fontGrayColor};
  font-size: 10px;
`;

export const SmallTableCurrency = styled.p`
  color: ${globalVariables.fontGrayColor};
  font-size: 12px;
`;
