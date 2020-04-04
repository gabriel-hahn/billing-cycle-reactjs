import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Page,
  Logout,
  PagesList,
  SandwichIconContainer,
  SmallNavBarContainer,
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
  selected?: boolean;
  sandwichClicked?: boolean;
}

const Navbar: React.FC<NavbarPropsInterface> = ({ onLogout }) => {
  const [sandwichClicked, setSandwichClicked] = useState<boolean>(true);
  const [selected, setSelected] = useState<PageType>(PageType.OVERVIEW);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());

    onLogout();
  };

  const toggleSandwichMenu = () => {
    setSandwichClicked(!sandwichClicked);
  };

  return (
    <Container>
      <SmallNavBarContainer onClick={toggleSandwichMenu}>
        <SandwichIconContainer sandwichClicked={sandwichClicked}>
          <span />
          <span />
          <span />
        </SandwichIconContainer>
      </SmallNavBarContainer>
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
      </PagesList>

      <Logout onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p>Logout</p>
      </Logout>
    </Container>
  );
};

export default Navbar;
