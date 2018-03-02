import React, { Component } from 'react';
import panda from './panda.jpg';
import goose from './goose.jpg';

// Note: Here's an example of using variables to set attributes. It cleans up the render() code below.
const sideLength = "400px";

const pandaPic = (
  <img 
    src= {panda}
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

const goosePic = (
  <img 
    src= {goose}
    alt="goose" 
    height={sideLength} 
    width={sideLength} />
);

// This is called when the panda pic is clicked
const myPandaFunc = () => {
  console.log('hey there panda bear!')
}

// This is called when the goose pic is clicked
const myGooseFunc = () => {
  console.log('you silly goose!')
}

class Images extends Component {
    render() {
      return (
        <div>
            <h3>Images and JSX Practice</h3>
          {/* Below: using an event listener to call a function on click of the div */}
          <div onClick={myPandaFunc}>{pandaPic}</div>
          <div onClick={myGooseFunc}>{goosePic}</div>
        </div>
      );
    }
  }
  
  export default Images;

