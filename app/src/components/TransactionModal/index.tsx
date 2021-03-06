import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as TransactionsActions } from '../../store/ducks/transactions';
import { currentDateInputFormat, toBarFormat } from '../../utils/date';
import { formatCurrencyForInputs, getMoneyPersistFormat, formatCurrency } from '../../utils/currency';
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
  ButtonActions,
  ButtonsFormContainer,
} from './styles';
import { TransactionType, TransactionInterface } from '../../interfaces/transaction';
import { StoreInterface } from '../../interfaces/store';

export interface TransactionModalPropsInterface {
  onClose: () => void;
}

export interface StylesProps {
  transparent?: boolean;
  fullWidth?: boolean;
  debit?: boolean;
  credit?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

const TransactionModal: React.FC<TransactionModalPropsInterface> = ({ onClose }) => {
  const [money, setMoney] = useState<string>('');
  const [transaction, setTransaction] = useState<TransactionInterface>({
    type: CreditType.Others,
    category: TransactionType.DEBIT,
    date: currentDateInputFormat(),
    description: '',
    value: 0,
  });

  const transactionSelected = useSelector((store: StoreInterface) => (
    store.transactions.transactionSelected));

  const transactionType = transaction.category === TransactionType.CREDIT ? CreditType : DebitType;
  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionSelected) {
      const transactionState = { ...transactionSelected };
      const value = formatCurrency(transactionState.value || 0);

      setMoney(transactionState.value ? formatCurrencyForInputs(value) : '');

      transactionState.date = currentDateInputFormat(new Date(transactionState.date));

      setTransaction(transactionState);
    }
  }, [transactionSelected]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleAddTransaction = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const localeDate = toBarFormat(transaction.date);

    transaction.date = new Date(localeDate).toISOString();
    transaction.value = +getMoneyPersistFormat(money);

    dispatch(transaction.id
      ? TransactionsActions.updateTransactionRequest(transaction)
      : TransactionsActions.addTransactionRequest(transaction));

    onClose();
  };

  const handleTransactionChanged = (e: FormEvent<HTMLInputElement>) => {
    setTransaction({ ...transaction, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleMoneyChanged = (e: FormEvent<HTMLInputElement>) => {
    const value = formatCurrencyForInputs(e.currentTarget.value);

    setMoney(value);
  };

  const handleCreditClick = () => {
    setTransaction({ ...transaction, category: TransactionType.CREDIT, type: CreditType.Others });
  };

  const handleDebitClick = () => {
    setTransaction({ ...transaction, category: TransactionType.DEBIT, type: DebitType.Others });
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
          <InputValue value={money} onChange={handleMoneyChanged} required />
          <InputDescription
            value={transaction.description}
            onChange={handleTransactionChanged}
          />
          <InputContainer>
            <SelectType value={transaction.type} onChange={handleTypeChanged}>
              { Object.keys(transactionType).map((type: string) => (
                <option key={transactionType[type]} value={transactionType[type]}>{type}</option>
              )) }
            </SelectType>
            <InputDate value={transaction.date} onChange={handleTransactionChanged} required />
          </InputContainer>
        </FormContainer>
        <ButtonsContainer>
          <Button
            selected={transaction.category === TransactionType.DEBIT}
            onClick={handleDebitClick}
            debit
          >
            Debit
          </Button>
          <Button
            selected={transaction.category === TransactionType.CREDIT}
            onClick={handleCreditClick}
            credit
          >
            Credit
          </Button>
        </ButtonsContainer>
        <ButtonsFormContainer>
          <ButtonActions disabled={(!transaction.date || !money)} onClick={handleAddTransaction}>{`${transaction.id ? 'Update' : 'Add'} Transaction`}</ButtonActions>
          <ButtonActions transparent onClick={handleCloseModal}>Close</ButtonActions>
        </ButtonsFormContainer>
      </ModalContainer>
    </Container>
  );
};

export default TransactionModal;
