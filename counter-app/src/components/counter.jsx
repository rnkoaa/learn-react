import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    imgUrl: 'https://picsum.photos/200',
    tags: ['tag-1', 'tag-2', 'tag-3']
  };

  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  handleIncrement = e => {
    // Console.log('Handle Increment');
    console.log(e);
    let { counter: count } = this.state;

    this.setState({ counter: count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} /> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          {' '}
          Increment{' '}
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  // conditional rendering of
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p> there are No Tags </p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount = () => {
    const { counter: count } = this.state;
    return count === 0 ? 'zero' : count;
  };

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.counter === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}

export default Counter;
