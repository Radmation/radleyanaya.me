import React, { FC } from "react";
import './work.scss';
// import logo from './logo.png';

const Work: FC = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>WORK</h2>
            <div className="divider"></div>
            <h2 className="subheading">👀 Here you will find some of the projects I have had the pleasure of working on.</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="work-item">
              <div className="background-image">
                <p>Crap</p>
                <p>Crap</p>
                <p>Crap</p>
              </div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="work-item">
              <div className="background-image">
                <p>Crap</p>
                <p>Crap</p>
                <p>Crap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;