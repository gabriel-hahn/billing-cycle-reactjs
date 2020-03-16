import React from 'react';
import { useDispatch } from 'react-redux';

import { Creators as UsersTypes } from '../../store/ducks/users';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar = ({ onLogout }: NavbarProps) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());

    onLogout();
  };

  return (
    <>
      <h1>Navbar Component</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Navbar;
