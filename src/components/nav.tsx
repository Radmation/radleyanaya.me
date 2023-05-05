import React, { FC } from "react";
import './nav.scss';

const Nav: FC = () => {
  return (
    <nav className="navigation padded-section">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <div className="logo-wrapper">
              <h1>Radley Anaya<span>Web Developer/Engineer</span></h1>
            </div>
          </div>
          <div className="col-xs-6">

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;