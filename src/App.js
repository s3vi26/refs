import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { sayings: "" };
  }
  
  update(e) {
    this.setState({ sayings: this.refs.btalks.value });
  }
  
  render() {
    return (
      <div>
        Bob says <input type="text" ref="btalks" onChange={this.update.bind(this)} />
      </div>
    );
  }
}

export default App;
