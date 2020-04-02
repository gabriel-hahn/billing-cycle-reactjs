import React from 'react';
import { useSelector } from 'react-redux';

import { formatCurrency } from '../../utils/currency';

import {
  Container,
  Description,
  Value,
  Date,
} from './styles';
import { StoreInterface } from '../../interfaces/store';

export interface AmountPropsInterface {
  description?: string;
  color: string;
  value: number;
  showDate?: boolean;
}

const Amount: React.FC<AmountPropsInterface> = ({
  description,
  color,
  value,
  showDate,
}) => {
  const dateRange = useSelector((state: StoreInterface) => state.transactions.currentDateRange);

  return (
    <Container value={value} color={color}>
      <Description>
        {description} (R$)
      </Description>
      <Value>
        {formatCurrency(value)}
      </Value>
      { showDate && dateRange && (
        <Date>
          {dateRange.startDate} - {dateRange.endDate}
        </Date>
      ) }
    </Container>
  );
};

export default Amount;
