import React from 'react';
import { useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';

import { getSettings } from '../../utils/settings';
import { formatCurrency } from '../../utils/currency';
import { toLocaleDateString } from '../../utils/date';
import { globalVariables } from '../../styles/variables';

import {
  Container,
  Description,
  Value,
  DateItem,
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
  const currencyFormat = getSettings().currency;

  return (
    <Container value={value} color={color}>
      { loading ? (
        <RotateSpinner size={22} color={globalVariables.mainBlue} />
      ) : (
        <>
          <Description>
            {description} ({currencyFormat})
          </Description>
          <Value>
            {formatCurrency(value)}
          </Value>
          { showDate && dateRange && (
            <DateItem>
              {dateRange.startDate} - {dateRange.endDate}
            </DateItem>
          ) }
        </>
      )}
    </Container>
  );
};

export default Amount;
