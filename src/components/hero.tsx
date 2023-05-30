import React, { FC, useEffect, useState } from "react";
import './hero.scss';

const Hero: FC = () => {
  const jobWords = ['web developer.', 'software engineer.', 'blockchain developer.', 'front-end developer.', 'back-end developer.'];
  const funWords = ['roller skater.', 'pickleball\'er.', 'gamer.', 'gardener.', 'musician.'];
  const [count, setCount] = useState(0);
  const [currentWord, setCurrentWord] = useState('<span class="animated">'+jobWords[jobWords.length - 1]+'</span>');
  const [currentFunWord, setCurrentFunWord] = useState('<span class="animated">'+funWords[funWords.length - 1]+'</span>');


  const setNextWord = (count: number) => {
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
  }, [count, setNextWord]);

  return (
    <section id="hero">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12">
            <h2><span className="whats-up">👋 <strong>What's up?</strong></span><br />I am Radley Anaya.<br />
              I'm a <strong dangerouslySetInnerHTML={{ __html: currentWord }}></strong><br />
              {/*<span className="text-muted">Unprofessionally I'm a <strong dangerouslySetInnerHTML={{ __html: currentFunWord }}></strong></span>*/}
            </h2>
            <div className="divider centered"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;