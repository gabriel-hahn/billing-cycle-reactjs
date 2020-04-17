import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';
import Lottie, { Options } from 'react-lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { RotateSpinner } from 'react-spinners-kit';

import pigAnimation from '../../assets/piggy-bank.json';
import { Creators as UsersTypes } from '../../store/ducks/users';

import {
  Container,
  FormContainer,
  FormInputs,
  AnimationContainer,
  Animation,
  Title,
  Input,
  LoginButton,
  IconsContainer,
} from './styles';
import { UserInterface } from '../../interfaces/user';
import { StoreInterface } from '../../interfaces/store';

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: pigAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ResetPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { token: tempToken } = useParams();

  const dispatch = useDispatch();
  const { data: userState, loading } = useSelector((state: StoreInterface) => state.users);

  useEffect(() => {
    if (userState && userState.token) {
      history.push('/dashboard/overview');
    }
  }, [userState]);

  const handleFormSubit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const user: UserInterface = {
      email,
      password,
      tempToken,
    };

    dispatch(UsersTypes.resetPasswordRequest(user));
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value.trim());
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value.trim());
  };

  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value.trim());
  };

  return (
    <Container>
      <AnimationContainer>
        <Animation>
          <Lottie
            options={defaultOptions}
          />
        </Animation>
      </AnimationContainer>
      <FormContainer onSubmit={handleFormSubit}>
        <Title>Reset password</Title>
        <FormInputs>
          <div>
            <IconsContainer>
              <FontAwesomeIcon className="font-icon" icon={faUser} />
            </IconsContainer>
            <Input value={email} onChange={handleEmailChange} placeholder="E-mail" name="email" />
          </div>
          <div>
            <IconsContainer>
              <FontAwesomeIcon className="font-icon" icon={faLock} />
            </IconsContainer>
            <Input value={password} onChange={handlePasswordChange} placeholder="New password" name="password" type="password" />
          </div>
          <div>
            <IconsContainer>
              <FontAwesomeIcon className="font-icon" icon={faLock} />
            </IconsContainer>
            <Input value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm new password" name="password-confirm" type="password" />
          </div>
          <LoginButton>
            { loading ? <RotateSpinner size={22} color="#FFF" /> : 'Reset now' }
          </LoginButton>
        </FormInputs>
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
