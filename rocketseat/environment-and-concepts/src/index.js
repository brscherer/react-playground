import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {}

  handleClick = () => {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <Fragment>
        <h1 className="title">Hello 3r</h1>
        <h2 style={{ color: '#f00' }}>{counter}</h2>
        <Button onClick={this.handleClick}>Count</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
