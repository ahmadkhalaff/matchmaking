import React, { useState } from 'react';
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import MiddlePart from "./components/MiddlePart";
import "./App.css";

import bear from "./images/bear.jpg";
import camel from "./images/camel.jpg";
import cat from "./images/cat.jpg";
import cow from "./images/cow.jpg";
import dog from "./images/dog.jpg";
import elepahant from "./images/elepahant.jpg";
import horse from "./images/horse.jpg";
import lion from "./images/lion.jpeg";
import monkey from "./images/monkey.jpeg";
import panda from "./images/panda.jpg";

const data = [
  { name: 'Bear', image: bear, flag: 0 },
  { name: 'Sheep', image: camel, flag: 1 },
  { name: 'Cat', image: cat, flag: 0 },
  { name: 'Cow', image: cow, flag: 0 },
  { name: 'Tiger', image: dog, flag: 1 },
  { name: 'Deer', image: elepahant, flag: 1 },
  { name: 'Horse', image: horse, flag: 0 },
  { name: 'lion', image: lion, flag: 0 },
  { name: 'monkey', image: monkey, flag: 0 },
  { name: 'Giraffe', image: panda, flag: 1 },
];

const App = () => {
  const [happyCount, setHappyCount] = useState(0);
  const [angryCount, setAngryCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCorrectClick = () => {
    setHappyCount(happyCount + 1);
    setCurrentIndex(currentIndex + 1);
  };

  const handleIncorrectClick = () => {
    setAngryCount(angryCount + 1);
    setCurrentIndex(currentIndex + 1);
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setHappyCount(0);
    setAngryCount(0);
  };
  return (
    <div>
      <Header happyCount={happyCount} angryCount={angryCount} />
      {currentIndex < data.length ? (
        <div>
        <MiddlePart
          data={data[currentIndex]}
          onCorrectClick={handleCorrectClick}
          onIncorrectClick={handleIncorrectClick}
        />
        <Bottom
                  data={data[currentIndex]}
                  onCorrectClick={handleCorrectClick}
                  onIncorrectClick={handleIncorrectClick}
        />
        </div>
      ) : (
        <div className='col-md-8 m-auto'>
          <div className='text-center mt-5'>
          <p className='zoo_close'>Now Zoo Close</p>
          <p className='zoo_close'>Play Again</p>
       
       <button className='restart_btn' onClick={handleRestart}>Restart</button>
          </div>

        
      </div>
      )}
    </div>
  );
}

export default App;

