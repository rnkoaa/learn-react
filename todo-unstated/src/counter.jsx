import React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from './containers/counter-container';

const Counter = () => {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div>
          <button onClick={() => counter.decrement()}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  );
};

export default Counter;
