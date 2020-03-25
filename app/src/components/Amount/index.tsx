import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { formatCurrencyWithType } from '../../utils/currency';

import { Container, Icon, Value } from './styles';

export interface AmountPropsInterface {
  incoming?: boolean;
  value: number;
}

const Amount: React.FC<AmountPropsInterface> = ({ incoming, value }) => (
  <Container incoming={incoming} value={value}>
    <Icon>
      <FontAwesomeIcon icon={incoming ? faMoneyBillAlt : faCartArrowDown} />
    </Icon>
    <Value>
      {formatCurrencyWithType(value)}
    </Value>
  </Container>
);

export default Amount;
