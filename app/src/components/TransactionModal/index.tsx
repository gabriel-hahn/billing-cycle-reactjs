import React from 'react';

import {
  Container,
  ModalContainer,
  Button,
  ButtonsContainer,
  FormContainer,
  InputValue,
  InputDate,
  InputDescription,
  InputQuantity,
  InputCheckbox,
  InputContainer,
} from './styles';

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
        <FormContainer>
          <InputValue required />
          <InputDescription />
          <InputContainer>
            <InputDate required />
            <InputQuantity required />
          </InputContainer>
          <InputContainer>
            <InputCheckbox />
            <InputDate />
          </InputContainer>
        </FormContainer>
        <ButtonsContainer>
          <Button onClick={handleCloseModal}>Add Transaction</Button>
          <Button transparent onClick={handleCloseModal}>Close</Button>
        </ButtonsContainer>
      </ModalContainer>
    </Container>
  );
};

export default TransactionModal;
