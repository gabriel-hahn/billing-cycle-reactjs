import React from 'react';
import { useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';

import { formatCurrency } from '../../utils/currency';
import { globalVariables } from '../../styles/variables';

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
  loading?: boolean;
  showDate?: boolean;
}

const Amount: React.FC<AmountPropsInterface> = ({
  description,
  color,
  value,
  loading,
  showDate,
}) => {
  const dateRange = useSelector((state: StoreInterface) => state.transactions.currentDateRange);

  return (
    <Container value={value} color={color}>
      { loading ? (
        <RotateSpinner size={22} color={globalVariables.mainBlue} />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default Amount;
