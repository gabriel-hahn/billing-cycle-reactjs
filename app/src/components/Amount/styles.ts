import styled from 'styled-components';

import { globalVariables } from '../../styles/variables';
import { AmountPropsInterface } from './index';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 18vh;
  width: 35em;
  border-radius: 5px;
  margin: 0.6em 1.3em;
  background: ${globalVariables.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props: AmountPropsInterface) => (props.color)};
`;

export const Date = styled.p`
  font-size: 12px;
`;

export const Description = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Value = styled.h2`
  font-size: 2.4em;
  font-weight: 100;
`;

Value.displayName = 'Value';
