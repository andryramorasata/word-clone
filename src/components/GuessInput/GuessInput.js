import React from 'react';

function GuessInput({ guess, setGuess, guesses, setGuesses }) {
  function handleSubmit(event) {
    event.preventDefault();
    let currentGuess = event.target.value;
    let savedGuess = [
      ...guesses,
      {
        guess: guess,
        id: Math.random(),
      },
    ];

    setGuesses(savedGuess);
    setGuess(currentGuess);
    setGuess('');
    console.info({ guess });
    console.log(savedGuess);
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          let letter = event.target.value;
          setGuess(letter.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
