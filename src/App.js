import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Initial Text"

    };
  }

  clicked() {
    this.setState({ text: this.refs.textBox.value });
    // this.forceUpdate();

  }
  
  render() {
    console.log('rendering');
    return (
      <div className="App">
      {this.state.text}
        <h1> I Am The h1 </h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input ref="textBox" type="text" />
          <button onClick={ (e) => { this.clicked("hello"); } }> TheButton </button>
        </div>
      </div>
    );
  }
}

export default App;
