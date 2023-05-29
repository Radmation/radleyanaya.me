import React, { FC } from "react";
import './nav.scss';

const Nav: FC = () => {
  return (
    <nav className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="logo-wrapper">
              <h1>Radley Anaya<span>Web Developer</span></h1>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="nav-wrapper">
              <ul>
                <li><a href="/Resume_Radley_May_2023.pdf" target="_blank">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;