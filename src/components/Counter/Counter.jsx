import { useEffect, useReducer, useState } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const initialState = { count: 0, currentColor: yellow };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return { ...state, currentColor: action.payload.currentColor };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
  }
};

export default function Counter() {
  const [counter, dispatch] = useReducer(counterReducer, initialState);


  useEffect(() => {
    if (count === 0) {
      dispatch({ type: 'COLOR_CHANGE', payload: { currentColor: colors.yellow } });
    }
    
    if (count > 0) {
      dispatch({ type: 'COLOR_CHANGE', payload: { currentColor: colors.green } });
    }
    
    if (count < 0) {
      dispatch({ type: 'COLOR_CHANGE', payload: { currentColor: colors.red } });
    }
  }, [count]);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <main className={styles.main}>
      <h1 style={{ color: currentColor }}>{count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
