import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { Container, Icon, Value } from './styles';

export interface AmountPropsInterface {
  incoming?: boolean;
  value: number;
  currency: string;
}

const Amount: React.FC<AmountPropsInterface> = ({ incoming, value, currency }) => (
  <Container incoming={incoming} value={value} currency={currency}>
    <Icon>
      <FontAwesomeIcon icon={incoming ? faMoneyBillAlt : faCartArrowDown} />
    </Icon>
    <Value>
      {`${currency} ${value}`}
    </Value>
  </Container>
);

export default Amount;
