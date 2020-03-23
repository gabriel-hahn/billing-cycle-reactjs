import React, { useState } from 'react';
import { DateRangePicker, DateRange } from '@matharumanpreet00/react-daterange-picker';

import {
  Container,
  ContainerDate,
  DateButton,
  ContainerTable,
  DateRangeContainer,
} from './styles';

const transactions = [
  {
    id: 1,
    description: 'Hamburguer John',
    date: '20/01/2020',
    value: 'R$ 19.90',
  },
  {
    id: 2,
    description: 'Hamburguer John',
    date: '20/01/2020',
    value: 'R$ 19.90',
  },
  {
    id: 3,
    description: 'Hamburguer John',
    date: '20/01/2020',
    value: 'R$ 19.90',
  },
];

const TransactionTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({});

  const handleDatePickerChange = (date: DateRange) => {
    console.log(date);

    setOpen(false);
  };

  const handleDatePickerToggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <ContainerDate>
        <div>
          <DateButton>Day</DateButton>
          <DateButton>Week</DateButton>
          <DateButton>Month</DateButton>
        </div>
        <DateRangeContainer>
          <DateButton onClick={handleDatePickerToggle}>Choose</DateButton>
          <DateRangePicker open={open} onChange={handleDatePickerChange} />
        </DateRangeContainer>
      </ContainerDate>
      <ContainerTable>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Value</th>
            <th />
          </tr>
          { transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.date}</td>
              <td>{transaction.value}</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          )) }
        </tbody>
      </ContainerTable>
    </Container>
  );
};

export default TransactionTable;
