import React, { FC, useState } from "react";
import './nav.scss';

const Nav: FC = () => {
  const [isActive, setActive] = useState(false);

  const toggleNavigation = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="logo-wrapper">
                <h1>Radley Anaya<span>Web Developer</span></h1>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={isActive ? 'nav-wrapper active': 'nav-wrapper'}  onClick={toggleNavigation}>
                <div className="menu-button" role="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="link-wrapper">
                  <div className="container">
                    <div className="row around-md">
                      <div className="col-sm-12 col-lg-4">
                        <p className="bigger"><strong>I am Radley, a web developer based in Spokane, WA.</strong></p>
                        <p>Hey there I'm Radley, a full-stack web developer based in charming Spokane, WA. I have a passion for creating cool stuff with code. The more complex the problem, the more I get excited!</p>
                        <p>When I am not writing code, you can find me 👨‍🌾🌳 gardening, working on some 🏠🔨 home improvement, roller skating, or playing video games 🎮.</p>
                      </div>
                      <div className="col-sm-12 col-lg-4">
                        <p className="heading"><strong>Looking for something?</strong></p>
                        <ul>
                          <li><a href="/Resume_Radley_May_2023.pdf" target="_blank">📄 Resume</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="menu-wrapper">

      </div>
    </>
  );
};

export default Nav;