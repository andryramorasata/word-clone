import React from 'react';
import { range } from '../../utils';

function Guess({ row_val }) {
  return (
    <>
      {range(5).map((idx) => {
        return (
          <span key={idx} className="cell">
            {' '}
            {row_val ? row_val[idx] : undefined}{' '}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
