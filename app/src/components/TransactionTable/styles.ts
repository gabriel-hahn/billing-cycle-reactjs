import styled from 'styled-components';

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

export const DateButtonsContainer = styled.div`

`;

export const OptionButton = styled.button`
  background: #4D7C8A;
  color: #FFF;
  border-radius: 5px;
  width: 5em;
  height: 100%;
  font-size: 1em;
  margin-right: 5px;
  transition: all 0.5s;

  &:hover {
    background: #416975;
  }
`;

export const PaginationButton = styled(OptionButton)`
  width: 6em;
  background: ${(props: StylePropsInterface) => (props.disabled ? '#C1CFD3' : '#4D7C8A')};
  pointer-events: ${(props: StylePropsInterface) => (props.disabled ? 'none' : 'all')};
`;

export const ContainerTable = styled.table`
  background: #FFF;
  width: 73em;
  border-radius: 5px;
  border-collapse: collapse;
  font-size: 1em;

  tbody {
    max-height: 45vh;

    td, th {
      font-size: 1em;
      border: 1px solid #ddd;
      padding: 8px;
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      max-height: 12px;
      text-align: left;
      background-color: #4D7C8A;
      color: white;
    }

    tr:nth-child(even){
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: rgba(77, 124, 138, 0.3);
    }
  }
`;

export const ActionsButton = styled.button`
  height: 1.5em;
  width: 5em;
  font-size: 14px;
  background-color: #FFF;
  color: #333;
`;
