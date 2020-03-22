import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { Container, Icon, Value } from './styles';

export interface AmountPropsInterface {
  incoming?: boolean;
}

const Amount: React.FC<AmountPropsInterface> = ({ incoming }) => (
  <Container incoming={incoming}>
    <Icon>
      <FontAwesomeIcon icon={incoming ? faMoneyBillAlt : faCartArrowDown} />
    </Icon>
    <Value>R$ 3.234,00</Value>
  </Container>
);

export default Amount;
