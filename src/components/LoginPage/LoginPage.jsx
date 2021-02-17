import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import MountainLogin from '../Mountains/MountainLogin'

function LoginPage() {
  const history = useHistory();

  return (
    <div>
            <MountainLogin />
            <center>
        <button
          type="button"
          className="btn btn_asLink reg_swap"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
            <LoginForm />


    </div>
  );
}

export default LoginPage;
