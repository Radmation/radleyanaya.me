import React, { FC } from 'react';
import './heading.scss';

interface HeadingInterface {
  heading: string;
  subheading?: string;
}

const Heading: FC<HeadingInterface> = (headingInterface: HeadingInterface) => {
  const { heading, subheading } = headingInterface;

  return (
    <>
      <div className="container heading-container">
        <div className="row">
          <div className="col-xs-12">
            <h2>{heading}</h2>
            <div className="divider"></div>
            {subheading && <h2 className="subheading">{subheading}</h2>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Heading;