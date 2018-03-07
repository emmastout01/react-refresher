// Note: Imports should always go first before adding any global variables
import React, { Component } from 'react';
// Destructuring: We're destructuring Component here. This is a shorthand way of saying 'import that one thing, Component, from React
// Another way of doing this would be: 
// Const Component = React.Component
// This is not a React thing, it's an ES6 thing, but it's used all the time in React
import Header from './components/Header/Header.js'
  // Note: 'Header' does NOT need to match what we're exporting from the header.js file. Here, we're just naming a variable that we'll use
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
