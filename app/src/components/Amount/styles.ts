import styled from 'styled-components';

import { AmountPropsInterface } from './index';

export const Container = styled.div`
  display: flex;
  height: 18vh;
  width: 35em;
  border-radius: 5px;
  margin: 0.6em 1.3em;
  background: ${(props: AmountPropsInterface) => (props.incoming ? 'rgba(89, 201, 165, 0.75)' : 'rgba(77, 124, 138, 0.3)')};
`;

export const Icon = styled.img`

`;

export const Value = styled.h2`

`;
