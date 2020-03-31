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
  background: #FFF;
  height: 320px;
  width: 280px;
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
})`
  margin-left: 5px;
`;

export const InputDate = styled(Input).attrs({
  placeholder: 'Date',
  name: 'date',
  type: 'date',
})``;

export const InputDescription = styled(Input).attrs({
  placeholder: 'Description',
  name: 'description',
  type: 'text',
})`
  margin-left: 5px;
`;

export const FormContainer = styled.div`
  height: 11em;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  height: 2em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const ButtonsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonActions = styled.button.attrs({
  type: 'button',
})`
  height: 2em;
  width: inherit;
  margin-bottom: 5px;
  background: ${(props: StylesProps) => (props.transparent ? '#FFF' : '#1D84B5')};
  color: ${(props: StylesProps) => (props.transparent ? '#1D84B5' : '#FFF')};
  font-size: 16px;
  border-radius: 5px;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  height: 2em;
  width: 125px;
  font-size: 16px;
  border-radius: 5px;
  background: ${(props: StylesProps) => (props.credit ? '#96d2ba' : '#c4cfd3')};
  color: #333;
`;

export const SelectType = styled.select.attrs({
  placeholder: 'Classification',
})`
  height: 50px;
  flex: 1;
  margin-right: 10px;
  background: #FFF;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #4D7C8A;
  font-size: 14px;
`;
