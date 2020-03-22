import React from 'react';

import { Container } from './styles';

const TransactionTable: React.FC = () => (
  <Container>
    <table>
      <tr>
        <th>Description</th>
        <th>Date</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Hamburguer</td>
        <td>20/01/2020</td>
        <td>R$ 19.90</td>
      </tr>
      <tr>
        <td>Hamburguer</td>
        <td>20/01/2020</td>
        <td>R$ 19.90</td>
      </tr>
    </table>
  </Container>
);

export default TransactionTable;
