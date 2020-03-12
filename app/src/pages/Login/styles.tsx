import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const FormContainer = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const AnimationContainer = styled.div`
  background: #4D7C8A;
  flex: 1;
`;

export const Title = styled.h3`
  color: #4D7C8A;
  font-size: 24px;
  font-weight: normal;
`;

export const Input = styled.input`
  margin: 10px;
  padding: 15px;
  width: 280px;
`;

export const RegisterButton = styled.button`
  padding: 15px;
`;

export const LoginButton = styled.button`
  padding: 15px;
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
`;
