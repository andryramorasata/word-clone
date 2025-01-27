import React from 'react';

function GameBanner({ num_guesses, answer, status }) {
  return status === 'won' ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${num_guesses}`} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{` ${answer}`}</strong>.
      </p>
    </div>
  );
}

export default GameBanner;
