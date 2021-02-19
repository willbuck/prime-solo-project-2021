import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

//import footer
import MountainFooter from '../Mountains/MountainFooter';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to a Virtual Zendo');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Qingyuan Weixin wrote, “Before I had studied Ch’an for thirty years,
          I saw mountains as mountains, and rivers as rivers. When I arrived at a more intimate knowledge,
          I came to the point where I saw that mountains are not mountains, and rivers are not rivers. But now
          that I have got its very substance, I am at rest. For it’s just that I see mountains once again as mountains,
          and rivers once again as rivers.”
          </p>
        </div>
        <div className="grid-col grid-col_4">

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
      <MountainFooter />
    </div>
  );
}

export default LandingPage;
