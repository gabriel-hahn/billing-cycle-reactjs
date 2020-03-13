import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as UsersTypes } from '../../store/ducks/users';

import {
  Container,
  FormContainer,
  FormInputs,
  AnimationContainer,
  Title,
  Input,
  LoginButton,
  RegisterButton,
} from './styles';
import { UserInterface } from '../../interfaces/user';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const dispatch = useDispatch();

  const handleFormSubit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const user: UserInterface = {
      email,
      password,
    };

    dispatch(UsersTypes.getLoginRequest(user));
  };

  return (
    <Container>
      <AnimationContainer>
        Animation
      </AnimationContainer>
      <FormContainer onSubmit={handleFormSubit}>
        <Title>Know where your money is</Title>
        <FormInputs>
          {!isLogin && <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />}
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
          <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
          <LoginButton>Login</LoginButton>
        </FormInputs>
        <RegisterButton onClick={() => setIsLogin(false)}>Register</RegisterButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
