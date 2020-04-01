import React, { useState } from 'react';
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

enum PageType {
  REPORT = 'report',
  OVERVIEW = 'overview',
}

export interface NavbarPropsInterface {
  onLogout: () => void;
}

export interface StylesProps {
  selected: boolean;
}

const Navbar: React.FC<NavbarPropsInterface> = ({ onLogout }) => {
  const [selected, setSelected] = useState<PageType>(PageType.OVERVIEW);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());

    onLogout();
  };

  return (
    <Container>
      <PagesList>
        <Page
          selected={selected === PageType.OVERVIEW}
          onClick={() => setSelected(PageType.OVERVIEW)}
        >
          <Link to="overview">
            <FontAwesomeIcon icon={faBookOpen} />
            <p>Overview</p>
          </Link>
        </Page>
        <Page
          selected={selected === PageType.REPORT}
          onClick={() => setSelected(PageType.REPORT)}
        >
          <Link to="report">
            <FontAwesomeIcon icon={faChartLine} />
            <p>Report</p>
          </Link>
        </Page>
      </PagesList>

      <Logout onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p>Logout</p>
      </Logout>
    </Container>
  );
};

export default Navbar;
