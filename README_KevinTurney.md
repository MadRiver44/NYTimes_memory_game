# # NYT Games Team Web Code Test

This project was an exercise in conditional rendering, demonstrating a solid understanding of data flow in React, state management, when and how to trigger a state update, component breakdown of the UI, and basic game logic.

## What I learned

I improved my understnding of conditional rendering. There were many way to solve a UI update problem, and with quaestions asked and research I found the best and most clear ways of doing something given an particu;ar situation.

## TODO, in order

  1. Implement Redux statemanagement, even though this is a small app
  2. Experiment with Material UI - though I did experiment and succesfully use it
     in the codesandbox, I didn't get a chance to fully deep dive into it.
  3. Implement a backend for authentication and score saving.
  4. Serverside rendering and routing with React Router 4

## Walkthough of the app

Every part of the UI is a companent, ala [thinking in react docs](https://reactjs.org/docs/thinking-in-react.html). 

### <Game />
Starting on the game board I have a small state object with six properties, four of which are filled from the axios "GET" request, the rest are used to keep track of items to determine a particular rendering. From there, a lifcycle hook is used to make sure that after the Game component mounts the data is fetched and loaded.

The event handlers handleEayCards and handleHardCards are conditionally rendered depending on which Button is clicked. In addition, onClick, the reuseable Timer component is rendered and starts.

The removematches function does the heavy lifting for comparing and determining when and how a cards are removed from the screen. I pass in an array consosting of an "e.target.value" and setState on itemsArray, a state property. From there I compare the two array and if they match, then I filter them out from the array of currentCards. The currentCards array is determing/ filled with either easy cards or hard cards.

### <Cards />

A child of Game.js, Card.js are passed props, cardTypes, again either the array of heasy or hard cards and the eventHandler, removeMatches. In Cards.js, the main role is to provide a conditonal render to distribute cards once a Button component is clicked. The condition is "if currenCards is empty "No Cards" is rendered else distribute a particular set of cards".

From this component, Cards.js returns a Card component, passing through the prop, removeMatches from Game.js

### <Card />

Card.js is a simple componment that renders a div with an onClick, that is a callback, removeMatches.

### <Button />

A child of Game.js, button is passed a prop, "clickHandler", which is a reference to the functions either "handleEasyCards" or "handleHardCards".

## Summary

I thouroughly enjoyed this code test and I plan to continue and fully extend it. Once completed, I will move on to make a clone of the NY Times game, Set. 



