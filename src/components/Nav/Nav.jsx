import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null && user.is_admin){
    loginLinkData.path = '/admin';
    loginLinkData.text = 'Home';

  }

  else if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Virtual Zendo</h2>
      </Link>
      <div>
      <Link className="navLink button-hover-in-bar" to="/about">
          About
        </Link>
        <Link className="navLink button-hover-in-bar" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>


        {user.id && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
