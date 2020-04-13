import styled from 'styled-components';

import { globalVariables } from '../../../styles/variables';

export const Container = styled.div`
  padding: 2.25em;
  max-width: 90vw;
  flex: 1;
  display: inline-block;
`;

export const SelectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > :last-child {
    margin-left: 2em;
  }
`;

export const SelectItem = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  flex-direction: column;
`;

export const SelectTitle = styled.p`
  color: ${globalVariables.fontBlackColor};
  margin-bottom: 10px;
`;

export const Select = styled.select`
  height: 50px;
  flex: 1;
  background: ${globalVariables.white};
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${globalVariables.mainGreen};
  font-size: 14px;
`;

SelectItem.displayName = 'SelectItem';
SelectTitle.displayName = 'SelectTitle';
Select.displayName = 'Select';
