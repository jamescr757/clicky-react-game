# clicky-react-game

Basic react application that uses one stateful component to control all of its child components. 

-------

## How to Play the Game 

* Try to click on all the cards without clicking on the same twice
* Your score is determined by how many cards are clicked before clicking on the same card twice 
* The maximum score is 12 


------

## Context if Fork this Repo
* Currently, the App component controls every other component (its children)
* If you want to add more cards, you can add their name to the `characters.json` file in `src/components/CardContainer/` 
* You'll want to save an image to the `public/images/` folder with the name of the file corresponding to the name in `characters.json`
* The card container utilizes flexbox to display the card, so no additional formatting is required