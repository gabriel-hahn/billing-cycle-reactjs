import styled from 'styled-components';

import { StylesProps } from './index';

export const Container = styled.form`
  position: absolute;
  background: rgba(0, 0, 0, 0.55);
  height: 100vh;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFF;
  height: 400px;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  height: 50px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #4D7C8A;
  font-size: 14px;
`;

export const InputValue = styled(Input).attrs({
  placeholder: 'Value',
  name: 'value',
  type: 'number',
})``;

export const InputQuantity = styled(Input).attrs({
  placeholder: 'Quantity',
  name: 'quantity',
  type: 'number',
})``;

export const InputDateRepeat = styled(Input).attrs({
  placeholder: 'Date',
  name: 'date_repeat',
  type: 'date',
})``;

export const InputDate = styled(Input).attrs({
  placeholder: 'Date',
  name: 'date',
  type: 'date',
})``;

export const InputCheckboxText = styled.p`
  height: 50px;
  font-size: 14px;
`;

export const InputCheckbox = styled(Input).attrs({
  name: 'repeat',
  type: 'checkbox',
})``;

export const InputDescription = styled(Input).attrs({
  placeholder: 'Description',
  name: 'description',
  type: 'text',
})``;

export const FormContainer = styled.div`
  height: 15em;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  height: 2em;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonsFormContainer = styled(ButtonsContainer)`
  flex-direction: column;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  height: inherit;
  margin-left: 10px;
  width: ${(props: StylesProps) => (props.fullWidth ? 'inherit' : '150px')};
  background: ${(props: StylesProps) => (props.transparent ? '#FFF' : '#1D84B5')};
  color: ${(props: StylesProps) => (props.transparent ? '#1D84B5' : '#FFF')};
  font-size: 16px;
  border-radius: 5px;
`;
