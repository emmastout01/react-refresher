import React, { Component } from 'react';
import logo from './logo.svg';
import panda from './panda.jpg';
import goose from './goose.jpg';


// This is a 'smart' component. 

const myName = 'Emma'; 

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

class Header extends Component {
    render() {
      return (
        <div>
          {/* Note: We use 'className' instead of 'class' in JSX because class is a reserved word in JavaScript. */}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Note: In JSX we can access JavaScript by using single brackets (see next line) */}
            <h1 className="App-title">Welcome to React, {myName}!</h1>
          </header>
          {/* Note: Everything needs a closing tag in JSX. <br> won't fly; it needs to be <br />. */}
          <br />
          {/* Below: using an event listener to call a function on click of the div */}
          <div onClick={myPandaFunc}>{pandaPic}</div>
          <div onClick={myGooseFunc}>{goosePic}</div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
  
  export default Header;

  // Here's an example of a 'dumb' component: 
  // It's just a function. It has no render function (because we're not in a component class anymore)

 /* We can take away the 'return' from this function. To do that, we can use this cool thing in ES6 that equivalizes these two things:

  const Emma = () => {
    return (
    <div>Emma</div>
    )
  }
 and 
   const Emma = () => (
    return <div>Emma</div>
  ); 
  
  So, we can write the following code, without returning anything: 


  const Header = () => (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
  );
  
  export default Header;

  */


