import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
