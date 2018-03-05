import React, { Component } from 'react';

let isACat = true; 

class Conditionals extends Component {
  render() {
    return (
      <div >
        <h3>Conditionals Practice</h3>
        <p>Hello world! Test Test Test!</p>
        {/* Below: This is a conditional format that is common in React. It's just vanilla JavaScript. What a handy way to write simple conditionals! */}
        {/* The format: condition ? if true do this thing : if false do this thing */}
        <h4>{isACat = true ? 'You\'re a cool cat!' : 'What\'s up dog?'}</h4>
      </div>
    );
  }
}

export default Conditionals;
