import React from 'react';

import { Container, Icon, Value } from './styles';

export interface AmountPropsInterface {
  incoming?: boolean;
}

const Amount: React.FC<AmountPropsInterface> = ({ incoming }) => (
  <Container incoming={incoming}>
    <Icon />
    <Value />
  </Container>
);

export default Amount;
