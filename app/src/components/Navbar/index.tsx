import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, PagesList, Page, Logout } from './styles';

import { Creators as UsersTypes } from '../../store/ducks/users';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());

    onLogout();
  };

  return (
    <Container>
      <PagesList>
        <Page><Link to="overview">Overview</Link></Page>
        <Page><Link to="report">Report</Link></Page>
      </PagesList>

      <Logout type="button" onClick={handleLogout}>Logout</Logout>
    </Container>
  );
};

export default Navbar;
