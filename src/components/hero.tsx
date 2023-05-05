import React, { FC, useEffect, useRef, useState } from "react";
import './hero.scss';

const Hero: FC = () => {
  const jobWords = ['web developer.', 'software engineer.', 'blockchain developer.', 'front-end developer.', 'back-end engineer.'];
  const funWords = ['roller skater.', 'pickleball\'er.', 'gamer.', 'family man.', 'musician.'];
  const [count, setCount] = useState(0);
  const [currentWord, setCurrentWord] = useState('<span class="animated">'+jobWords[jobWords.length - 1]+'</span>');
  const [currentFunWord, setCurrentFunWord] = useState('<span class="animated">'+funWords[funWords.length - 1]+'</span>');


  const setNextWord = (count: number) => {
    console.log('Current Count: ' + count);

    if (count + 1 >= jobWords.length) {
      setCount(0);
    } else {
      setCount(prevCount => prevCount + 1);
    }

    setCurrentWord('<span class="animated">'+jobWords[count]+'</span>');
    setCurrentFunWord('<span class="animated">'+funWords[count]+'</span>');
  };

  useEffect(() => {
    const interval = setInterval(() => setNextWord(count), 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section id="hero">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12">
            <h2>👋 Yo what's up? I am <strong>Radley Anaya.</strong><br />
              Professionally I'm a <strong dangerouslySetInnerHTML={{ __html: currentWord }}></strong><br />
              Unprofessionally I'm a <strong dangerouslySetInnerHTML={{ __html: currentFunWord }}></strong><br />
            </h2>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;