import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faChartLine,
  faSignOutAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Page,
  Logout,
  PagesList,
} from './styles';

import { Creators as UsersTypes } from '../../store/ducks/users';

import SandwichMenu from '../SandwichMenu';

enum PageType {
  REPORT = 'report',
  OVERVIEW = 'overview',
  SETTINGS = 'settings',
}

export interface NavbarPropsInterface {
  onLogout: () => void;
}

export interface StylesProps {
  selected?: boolean;
  sandwichMenuSelected?: boolean;
}

const Navbar: React.FC<NavbarPropsInterface> = ({ onLogout }) => {
  const [sandwichMenuSelected, setSandwichMenuSelected] = useState<boolean>(false);
  const [selected, setSelected] = useState<PageType>(PageType.OVERVIEW);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const path = location.pathname.split('/')[2];

    setSelected(path as PageType);
  }, []);

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());

    onLogout();
  };

  const handleSandwichMenuClicked = (clicked: boolean) => {
    setSandwichMenuSelected(clicked);
  };

  return (
    <>
      <SandwichMenu onClick={handleSandwichMenuClicked} />
      <Container sandwichMenuSelected={sandwichMenuSelected}>
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
              <p>Reports</p>
            </Link>
          </Page>
          <Page
            selected={selected === PageType.SETTINGS}
            onClick={() => setSelected(PageType.SETTINGS)}
          >
            <Link to="settings">
              <FontAwesomeIcon icon={faCog} />
              <p>Settings</p>
            </Link>
          </Page>
        </PagesList>

        <Logout onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <p>Logout</p>
        </Logout>
      </Container>
    </>
  );
};

export default Navbar;
