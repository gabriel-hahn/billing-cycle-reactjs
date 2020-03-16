import React from 'react';
import { useDispatch } from 'react-redux';

import { Creators as UsersTypes } from '../../store/ducks/users';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UsersTypes.logoutRequest());
  };

  return (
    <>
      <h1>Navbar Component</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Navbar;
