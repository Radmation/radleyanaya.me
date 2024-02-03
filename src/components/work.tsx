import React, { FC } from "react";
import './work.scss';
import Heading from './heading';

const Work: FC = () => {
  return (
    <section id="work">
      <Heading heading="MOST RECENT PROJECT" />
      <div className="work-item container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="project-title">
              <h3>AWESIMO</h3>
              <h4>A Web3/Web2 NFT Marketplace, bringing ticket stubs to blockchain.</h4>
            </div>
            <p><strong>Role:</strong> Senior Software Engineer - Full Stack</p>
          </div>
          <div className="col-xs-6 col-md-3">
            <p><strong>Technologies Used:</strong></p>
            <ul>
              <li>Node.js</li>
              <li>React.js</li>
              <li>DynamoDB</li>
              <li>GraphQL</li>
              <li>Next.js</li>
              <li>Typescript</li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <p><strong>Cool stuff:</strong></p>
            <ul>
              <li>Web3 Webhooks</li>
              <li>IPFS - Pinata</li>
              <li>Blockchain - Polygon</li>
              <li>Ether.js</li>
              <li>Serverless</li>
              <li>SQS</li>
              <li>S3</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="text-center"><strong>Check it out in the wild:</strong> <a href="https://awesimo.io" target="_blank">Awesimo.io</a></p>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10">
            <img src="/awesimo_desktop_mock.png" alt="Awesimo.io" className="featured-project-image" />
          </div>
        </div>
      </div>

      <Heading heading="PROJECTS" subheading="In no particular order" />
      <div className="work-grid container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://kalispelcasino.com" target="_blank">Kalispel Casino</a></p>
            <img src="/kalispel-casino-screenshot.png" alt="kalispelcasino.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://ucut.org/" target="_blank">UCUT - Upper Columbia United Tribes</a></p>
            <img src="/ucut-screenshot.png" alt="ucut.org" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://www.beckfield.edu/" target="_blank">Beckfield College</a></p>
            <img src="/beckfield-screenshot.png" alt="beckfieldcollege.edu" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://freshnaturefoods.com/" target="_blank">Fresh Nature Foods</a></p>
            <img src="/freshnaturefoods-screenshot.png" alt="freshnaturefoods.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://ign-usa.com/" target="_blank">IGN USA</a></p>
            <img src="/ign-usa-screenshot.png" alt="ign-usa.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://ohdela.com/" target="_blank">Ohdela</a></p>
            <img src="/ohdela-screenshot.png" alt="ohdela.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://accelschools.com/" target="_blank">Accel Schools</a></p>
            <img src="/accel-schools-screenshot.png" alt="accelschools.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://acparizona.org/" target="_blank">Academy with Community Partners</a></p>
            <img src="/acp-screenshot.png" alt="acparizona.org" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://www.cougsfirst.org/" target="_blank">Cougsfirst</a></p>
            <img src="/cougsfirst-screenshot.png" alt="cougsfirst.org" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://pansophiclearning.com/" target="_blank">Pansophic Learning</a></p>
            <img src="/pansohpic-screenshot.png" alt="pansophiclearning.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://virtualpreparatoryacademy.com/" target="_blank">Virtual Prep Academy</a></p>
            <img src="/virtual-prep-screenshot.png" alt="virtualpreparatoryacademy.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://trinityspokane.org/" target="_blank">Trinity Catholic School</a></p>
            <img src="/trinity-screenshot.png" alt="trinityspokane.org" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://www.7signal.com/" target="_blank">7 Signal</a></p>
            <img src="/7signal-screenshot.png" alt="7signal.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://nuvodia.com/" target="_blank">Nuvodia</a></p>
            <img src="/nuvodia-screenshot.png" alt="nuvodia.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="http://spokanewiffleballclassic.com/" target="_blank">Spokane Wiffle Ball Classic</a></p>
            <img src="/spokane-wiffle-ball-classic-screenshot.png" alt="spokanewiffleballclassic.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://integriscontracting.com/" target="_blank">Integris Contracting Inc.</a></p>
            <img src="/intergris-contracting-screenshot.png" alt="integriscontracting.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://www.kalispelautosales.com/" target="_blank">Kalispel Auto Sales</a></p>
            <img src="/kalispel-autosales-screenshot.png" alt="kalispelautosales.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://caseprepacademy.org/" target="_blank">Case Preparatory Academy</a></p>
            <img src="/case-screenshot.png" alt="caseprepacademy.org" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://larockacademy.com/" target="_blank">Larock Academy</a></p>
            <img src="/larock-academy-screenshot.png" alt="larockacademy.com" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <p><a href="https://simplystateddesigns.com/" target="_blank">Simply Stated Designs</a></p>
            <img src="/simply-stated-designs.com.png" alt="simplystateddesigns.com" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;