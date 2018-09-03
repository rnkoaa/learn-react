import { Container } from 'unstated';

class CounterContainer extends Container {
  state = {
    count: 0
  };

  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log('increment Updated!');
    });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 }, () => {
      console.log('decrement Updated!');
    });
  }
}

export default CounterContainer;
