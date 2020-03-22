import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  PagesList,
  Page,
  Logout,
} from './styles';

import { Creators as UsersTypes } from '../../store/ducks/users';

interface NavbarPropsInterface {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarPropsInterface> = ({ onLogout }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());

    onLogout();
  };

  return (
    <Container>
      <PagesList>
        <Page>
          <Link to="overview">
            <FontAwesomeIcon icon={faBookOpen} />
            <p>Overview</p>
          </Link>
        </Page>
        <Page>
          <Link to="report">
            <FontAwesomeIcon icon={faChartLine} />
            <p>Report</p>
          </Link>
        </Page>
      </PagesList>

      <Logout type="button" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p>Logout</p>
      </Logout>
    </Container>
  );
};

export default Navbar;
