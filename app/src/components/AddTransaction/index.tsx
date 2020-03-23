import React from 'react';

import { Container, PlusText } from './styles';

interface AddTransactionPropsInterface {
  onAdd: () => void;
}

const AddTransaction: React.FC<AddTransactionPropsInterface> = ({ onAdd }) => {
  const handleAddTransaction = () => {
    onAdd();
  };

  return (
    <Container onClick={handleAddTransaction}>
      <PlusText />
    </Container>
  );
};

export default AddTransaction;
