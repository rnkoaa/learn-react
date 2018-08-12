import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onCountersReset()}
          className="btn btn-primary btn-sm m-2"
        >
          {' '}
          Reset{' '}
        </button>
         {this.props.counters.map(counter => {
          return (
            <Counter
              onDelete={this.props.onCounterDelete}
              onIncrement={this.props.onCounterIncrement}
              onDecrement={this.props.onCounterDecrement}
              counter={counter}
              key={counter.id}
            />
          );
        })} 
      </div>
    );
  }
}

export default Counters;
