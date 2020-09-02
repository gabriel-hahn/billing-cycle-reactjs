import styled from 'styled-components';

import { globalVariables } from '../../styles/variables';
import { StylesProps } from './index';

export const Container = styled.form`
  position: absolute;
  background: rgba(0, 0, 0, 0.55);
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${globalVariables.white};
  height: 330px;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Input = styled.input`
  height: 50px;
  border: 0;
  outline: 0;
  border-bottom: 0.2px solid ${globalVariables.mediumGrey};
  font-size: 16px;
`;

export const InputValue = styled(Input).attrs({
  placeholder: '0,00',
  name: 'value',
  inputMode: 'numeric'
})`
  margin: 5px 0 5px 5px;
`;

export const InputDate = styled(Input).attrs({
  placeholder: 'Date',
  name: 'date',
  type: 'date',
})`
  width: 50%;
`;

export const InputDescription = styled(Input).attrs({
  placeholder: 'Description',
  name: 'description',
  type: 'text',
})`
  margin: 5px 0 5px 5px;
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
  margin: 0.5em 0;
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
  background: ${(props: StylesProps) => (props.transparent ? `${globalVariables.white}` : (props.disabled ? `${globalVariables.mainBlueLigth}` : `${globalVariables.mainBlue}`))};
  color: ${(props: StylesProps) => (props.transparent ? `${globalVariables.mainBlue}` : `${globalVariables.white}`)};
  pointer-events: ${(props: StylesProps) => (props.disabled ? 'none' : 'all')};
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props: StylesProps) => (props.transparent ? `${globalVariables.white}` : `${globalVariables.mainBlueHover}`)};
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  height: 2em;
  width: 135px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${(props: StylesProps) => (props.selected && props.debit ? `${globalVariables.mainPink}` : (props.selected && props.credit ? `${globalVariables.mainGreen}` : `${globalVariables.white}`))};
  color: ${(props: StylesProps) => (props.selected ? `${globalVariables.white}` : `${globalVariables.mainBlue}`)};
  transition: all 0.3s;
`;

export const SelectType = styled.select.attrs({
  placeholder: 'Classification',
})`
  height: 50px;
  flex: 1;
  margin-right: 10px;
  background: ${globalVariables.white};
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${globalVariables.mainGreen};
  font-size: 16px;
`;

InputValue.displayName = 'InputValue';
InputDescription.displayName = 'InputDescription';
SelectType.displayName = 'SelectType';
FormContainer.displayName = 'FormContainer';
ButtonsContainer.displayName = 'ButtonsContainer';
