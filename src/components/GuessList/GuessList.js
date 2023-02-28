import React from 'react';
import Guess from '../Guess';

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((value, idx) => {
        return (
          <p key={idx} className="guess">
            <Guess row_val={[...value]} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
