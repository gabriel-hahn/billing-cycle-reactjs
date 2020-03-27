import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  InputDateRepeat,
  InputDescription,
  InputQuantity,
  InputCheckbox,
  InputContainer,
  InputCheckboxText,
  ButtonsFormContainer,
} from './styles';
import { TransactionType, TransactionInterface } from '../../interfaces/transaction';
import { StoreInterface } from '../../interfaces/store';

interface TransactionModalPropsInterface {
  onClose: () => void;
}

export interface StylesProps {
  transparent?: boolean;
  fullWidth?: boolean;
}

const TransactionModal: React.FC<TransactionModalPropsInterface> = ({ onClose }) => {
  const [transaction, setTransaction] = useState<TransactionInterface>({
    quantity: 1,
    repeat: false,
    date: currentDateInputFormat(),
    date_repeat: currentDateInputFormat(),
    type: TransactionType.CREDIT,
  });

  const transactionSelected = useSelector((store: StoreInterface) => (
    store.transactions.transactionSelected));

  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionSelected) {
      transactionSelected.date = currentDateInputFormat(new Date(transactionSelected.date));

      if (transactionSelected.date_repeat) {
        transactionSelected.date_repeat = currentDateInputFormat(
          new Date(transactionSelected.date_repeat),
        );
      }

      setTransaction(transactionSelected);
    }
  }, [transactionSelected]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleAddTransaction = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(transaction.id
      ? TransactionsActions.updateTransactionRequest(transaction)
      : TransactionsActions.addTransactionRequest(transaction));

    onClose();
  };

  const handleTransactionChanged = (e: FormEvent<HTMLInputElement>) => {
    setTransaction({ ...transaction, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleCreditClick = () => {
    setTransaction({ ...transaction, type: TransactionType.CREDIT });
  };

  const handleDebitClick = () => {
    setTransaction({ ...transaction, type: TransactionType.DEBIT });
  };

  return transaction && (
    <Container>
      <ModalContainer>
        <FormContainer>
          <InputValue value={transaction.value} onChange={handleTransactionChanged} required />
          <InputDescription value={transaction.description} onChange={handleTransactionChanged} />
          <InputContainer>
            <InputDate value={transaction.date} onChange={handleTransactionChanged} required />
            <InputQuantity
              value={transaction.quantity}
              onChange={handleTransactionChanged}
              required
            />
          </InputContainer>
          <InputContainer>
            <InputCheckboxText>Repeat</InputCheckboxText>
            <InputCheckbox onChange={handleTransactionChanged} />
            <InputDateRepeat
              disabled={!transaction.repeat}
              value={transaction.date_repeat}
              onChange={handleTransactionChanged}
            />
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
