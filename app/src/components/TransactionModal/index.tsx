import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as TransactionsActions } from '../../store/ducks/transactions';
import { currentDateInputFormat } from '../../utils/date';
import { CreditType, DebitType } from '../../enums/transactions';

import {
  Container,
  ModalContainer,
  Button,
  ButtonsContainer,
  FormContainer,
  InputValue,
  InputDate,
  SelectType,
  InputDescription,
  InputContainer,
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
    type: CreditType.Others,
    category: TransactionType.CREDIT,
    date: currentDateInputFormat(),
  });

  const transactionSelected = useSelector((store: StoreInterface) => (
    store.transactions.transactionSelected));

  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionSelected) {
      transactionSelected.date = currentDateInputFormat(new Date(transactionSelected.date));

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
    setTransaction({ ...transaction, category: TransactionType.CREDIT });
  };

  const handleDebitClick = () => {
    setTransaction({ ...transaction, category: TransactionType.DEBIT });
  };

  const handleTypeChanged = (e: FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    const type = transaction.category === TransactionType.CREDIT
      ? (value as CreditType) : (value as DebitType);

    setTransaction({ ...transaction, type });
  };

  return transaction && (
    <Container>
      <ModalContainer>
        <FormContainer>
          <InputValue value={transaction.value} onChange={handleTransactionChanged} required />
          <InputDescription
            value={transaction.description}
            onChange={handleTransactionChanged}
          />
          <SelectType value={transaction.type} onChange={handleTypeChanged}>
            { Object.entries(transaction.category === TransactionType.CREDIT
              ? CreditType : DebitType).map((type : [string, CreditType]) => (
                <option key={type[1]} value={type[1]}>{type[0]}</option>
            )) }
          </SelectType>
          <InputContainer>
            <InputDate value={transaction.date} onChange={handleTransactionChanged} required />
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
