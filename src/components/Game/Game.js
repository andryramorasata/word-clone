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
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    let nextGuess = [...guesses, guess];
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
