import React, { Component } from 'react';
import logo from './logo.svg';

// This is a 'smart' component. 

const myName = 'Emma'; 

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


