import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as TransactionsActions } from '../../store/ducks/transactions';
import { currentDateInputFormat } from '../../utils/date';

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
  InputCheckboxText,
  ButtonsFormContainer,
} from './styles';
import { TransactionType, TransactionInterface } from '../../interfaces/transaction';

interface TransactionModalPropsInterface {
  onClose: () => void;
}

export interface StylesProps {
  transparent?: boolean;
  fullWidth?: boolean;
}

const TransactionModal: React.FC<TransactionModalPropsInterface> = ({ onClose }) => {
  const [value, setValue] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<string>(currentDateInputFormat());
  const [dateRepeat, setDateRepeat] = useState<string>(currentDateInputFormat());
  const [transactionType, setTransactionType] = useState<TransactionType>(TransactionType.CREDIT);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    onClose();
  };

  const handleAddTransaction = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newTransaction: TransactionInterface = {
      value,
      quantity,
      repeat,
      type: transactionType,
      description,
      date: new Date(date),
      date_repeat: repeat ? new Date(dateRepeat) : undefined,
    };

    dispatch(TransactionsActions.addTransactionRequest(newTransaction));

    onClose();
  };

  const handleValueChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value);
  };

  const handleQuantityChange = (e: FormEvent<HTMLInputElement>) => {
    setQuantity(+e.currentTarget.value);
  };

  const handleDescriptionChange = (e: FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleDateChange = (e: FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const handleDateRepeatChange = (e: FormEvent<HTMLInputElement>) => {
    setDateRepeat(e.currentTarget.value);
  };

  const handleRepeatChange = (e: FormEvent<HTMLInputElement>) => {
    setRepeat(e.currentTarget.checked);
  };

  const handleCreditClick = () => {
    setTransactionType(TransactionType.CREDIT);
  };

  const handleDebitClick = () => {
    setTransactionType(TransactionType.DEBIT);
  };

  return (
    <Container>
      <ModalContainer>
        <FormContainer>
          <InputValue value={value} onChange={handleValueChange} required />
          <InputDescription value={description} onChange={handleDescriptionChange} />
          <InputContainer>
            <InputDate value={date} onChange={handleDateChange} required />
            <InputQuantity value={quantity} onChange={handleQuantityChange} required />
          </InputContainer>
          <InputContainer>
            <InputCheckboxText>Repeat</InputCheckboxText>
            <InputCheckbox onChange={handleRepeatChange} />
            <InputDate disabled={!repeat} value={dateRepeat} onChange={handleDateRepeatChange} />
          </InputContainer>
        </FormContainer>
        <ButtonsContainer>
          <Button onClick={handleCreditClick}>Credit</Button>
          <Button onClick={handleDebitClick}>Debit</Button>
        </ButtonsContainer>
        <ButtonsFormContainer>
          <Button fullWidth onClick={handleAddTransaction}>Add Transaction</Button>
          <Button fullWidth transparent onClick={handleCloseModal}>Close</Button>
        </ButtonsFormContainer>
      </ModalContainer>
    </Container>
  );
};

export default TransactionModal;
