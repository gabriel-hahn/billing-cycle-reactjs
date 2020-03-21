import React from 'react';

import Amount from '../../../components/Amount';

import { AmountContainer } from './styles';

const Overview = () => {
  return (
    <AmountContainer>
      <Amount incoming />
      <Amount />
    </AmountContainer>
  );
};

export default Overview;
