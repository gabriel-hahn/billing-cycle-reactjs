import React from 'react';

import { Container, ModalContainer, Button } from './styles';

interface TransactionModalPropsInterface {
  onClose: () => void;
}

export interface StylesProps {
  transparent?: boolean;
}

const TransactionModal: React.FC<TransactionModalPropsInterface> = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Container>
      <ModalContainer>
        <Button onClick={handleCloseModal}>Add Transaction</Button>
        <Button transparent onClick={handleCloseModal}>Close</Button>
      </ModalContainer>
    </Container>
  );
};

export default TransactionModal;
