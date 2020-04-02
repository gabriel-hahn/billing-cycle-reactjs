import React from 'react';

import { formatCurrency } from '../../utils/currency';

import { Container, Description, Value } from './styles';

export interface AmountPropsInterface {
  description?: string;
  color: string;
  value: number;
}

const Amount: React.FC<AmountPropsInterface> = ({ description, color, value }) => (
  <Container value={value} color={color}>
    <Description>
      {description} (R$)
    </Description>
    <Value>
      {formatCurrency(value)}
    </Value>
  </Container>
);

export default Amount;
