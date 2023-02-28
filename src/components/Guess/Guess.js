import React from 'react';

function Guess({ row_val }) {
  return (
    <>
      {row_val.map((char, idx) => {
        return (
          <span key={idx} className="cell">
            {char}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
