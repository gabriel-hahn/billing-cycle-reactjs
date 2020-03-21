import React from 'react';

import { Container, PlusText } from './styles';

const AddTransaction: React.FC = () => {
  const handleAddTransaction = () => {
    // Open model to add a new transaction
    console.log('Adding new transaction');
  };

  return (
    <Container onClick={handleAddTransaction}>
      <PlusText />
    </Container>
  );
};

export default AddTransaction;
