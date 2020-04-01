import styled from 'styled-components';

import { AmountPropsInterface } from './index';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18vh;
  width: 35em;
  border-radius: 5px;
  margin: 0.6em 1.3em;
  background: ${(props: AmountPropsInterface) => (props.incoming ? 'rgba(89, 201, 165, 0.75)' : 'rgba(77, 124, 138, 0.3)')};
`;

export const Icon = styled.div`
  color: rgba(255, 255, 255, 0.2);
  font-size: 5.5em;
  margin-left: 40px;
`;

export const Value = styled.h2`
  font-size: 2.5em;
  font-weight: 100;
  margin-right: 15%;
  color: #2e2e2e;
`;

Icon.displayName = 'Icon';
Value.displayName = 'Value';
