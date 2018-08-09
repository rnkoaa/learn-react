import React, {Component} from 'react';

class CounterComponent extends Component {

  render() {
    const {itemCount} = this.props;
    return <h1>Hello, Word {itemCount}</h1>
  }
}

export default CounterComponent;
