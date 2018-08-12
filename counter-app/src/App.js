import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: '1', value: 0 },
      { id: '2', value: 0 },
      { id: '3', value: 5 },
      { id: '4', value: 0 }
    ]
  };

  handleDelete = counterId => {
    const filtered = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: filtered });
  };

  incrementCounter = counter => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = { ...counter };
    counters[idx].value++;
    this.setState({counters});
  };

  decrementCounter = counter => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = { ...counter };
    counters[idx].value--;
    this.setState({counters});
  };

  resetCounters = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  }

  render() {
    return (
    //  <NavBar />
    <React.Fragment>
        <NavBar  counters={this.state.counters}/>
        <div className="container">
          <Counters 
          counters={this.state.counters}
          onCountersReset={this.resetCounters}
          onCounterDelete={this.handleDelete}
          onCounterIncrement={this.incrementCounter}
          onCounterDecrement={this.decrementCounter}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
