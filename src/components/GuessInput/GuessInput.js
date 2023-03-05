import React from 'react';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    //let currentGuess = event.target.value;

    handleSubmitGuess(guess); //why does passing currentGuess instead,result in undefined?
    setGuess('');
    console.info({ guess });
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        id="guess-input"
        type="text"
        disabled={disabled}
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
