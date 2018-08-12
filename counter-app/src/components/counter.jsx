import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imgUrl: 'https://picsum.photos/200',
  //   tags: ['tag-1', 'tag-2', 'tag-3']
  // };

  // styles = {
  //   fontSize: 20,
  //   fontWeight: 'bold'
  // };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm mr-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm mr-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm mr-2"
          >
            x
          </button>
        </div>
        {/* <img src={this.state.imgUrl} /> */}

        {/* {this.renderTags()} */}
      </div>
    );
  }

  // conditional rendering of
  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p> there are No Tags </p>;
  //   }
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  };

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes +=
      this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}

export default Counter;
