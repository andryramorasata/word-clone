import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let initial_state = [];
  range(6).map((_) => {
    return initial_state.push('     ');
  });
  const [guesses, setGuesses] = React.useState(initial_state);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  function handleSubmitGuess(guess) {
    if (numOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    let nextGuess = [...guesses];
    nextGuess[numOfGuesses] = guess;
    setNumOfGuesses(numOfGuesses + 1);
    setGuesses(nextGuess);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
