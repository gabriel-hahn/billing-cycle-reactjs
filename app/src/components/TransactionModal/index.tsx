import React from 'react';

import { Container, ModalContainer } from './styles';

interface TransactionModalPropsInterface {
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalPropsInterface> = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Container>
      <ModalContainer>
        <button type="button" onClick={handleCloseModal}>Close</button>
      </ModalContainer>
    </Container>
  );
};

export default TransactionModal;
