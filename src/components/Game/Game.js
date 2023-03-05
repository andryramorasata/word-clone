import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GameBanner from '../GameBanner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isDone, setDone] = React.useState('');

  function checkGameStatus(guessInput, nextGuesses) {
    if (guessInput === answer) {
      setDone('won');
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setDone('lost');
    }

    return undefined;
  }

  function handleSubmitGuess(guess) {
    let result = checkGuess(guess, answer);
    let nextGuess = [...guesses, result];
    checkGameStatus(guess, nextGuess);
    setGuesses(nextGuess);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={Boolean(isDone)}
      />
      {isDone ? (
        <GameBanner
          num_guesses={guesses.length}
          answer={answer}
          status={isDone}
        />
      ) : undefined}
    </>
  );
}

export default Game;
