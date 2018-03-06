import React, { Component } from 'react';

let isACat = true; 

const actionLover = false;
const romComLover = true;
const musicalLover = true;
const dramaLover = true;
const horrorLover = false;

class Conditionals extends Component {
  render() {
    return (
      <div >
        <h3>Conditionals Practice</h3>
        {/* Below: This is the ternary operator, a conditional format that is common in React. It's just vanilla JavaScript. What a handy way to write simple conditionals! */}
        {/* The format: condition ? if true do this thing : if false do this thing */}
        <h4>{isACat = true ? 'You\'re a cool cat!' : 'What\'s up dog?'}</h4>
        {/* Below: This is the && operator. The format is condition && thing to run if condition is true. The code will only run if the condition is true. */}
        <h4>My favorite movies</h4>
        <ul>
          {actionLover && <li>Die Hard</li>}
          {romComLover && <li>Along Came Polly</li>}
          {musicalLover && <li>The Sound of Music</li>}
          {dramaLover && <li>Spotlight</li>}
          {horrorLover && <li>Final Destination III</li>}
        </ul>
        {/* Output: list with 'Along Came Polly', 'The Sound of Music' and 'Spotlight' */}
      </div>
    );
  }
}

export default Conditionals;

/* Note: 'if statements' do not work when they are written in JSX. 
 Example in JSX that will not work: 
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
  There are other ways to go about writing conditionals, either by writing if statements in JS and then plugging in the altered variables into JSX, or with the ternary operator.
)*/
// ----------------------------------------------------
/* Here's another nice example of the ternary operator: 
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
 */
