import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Initial Text"

    };
  }

  componentWillMount() {
    //called the first time the component is loaded right before the component is added to the page

    // Api.get('example.com/api/users').then((data) => {
    //   this.setState({ users:data});
    // })
    // listen();
  }

  componentDidMount() {
    // Called after the component had been rendered into the page

    // var button = document.getElementById('button');
    // debugger;
  }

  componentWillReceiveProps(nextProps) {
    // called when the props provided to the component are changed

    // if(this.props.userId !== nextProps.userId) {
      // if(this.props.userId != nextProp.userId) {
      //   if(this.props.userId == adminId) {
      //     this.setState({ text: 'nill is awesome'});
      //   }
      // }
    //   //make api call

  }

  componentWillUpdate(nextProps, nextState) {
    // called when the props and/or state change

    console.log('updating...');
    console.log(nextState.text);
  }

  componentshouldComponentUpdate() {
    //be careful and have full understanding
  }

  componentDidUpdate() {
    //called when the component is removed

  }

  componentWillUnmount() {
    // unlisten();

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input ref="textBox" type="text" />
          <button id="button" onClick={ (e) => { this.clicked("hello"); } }> TheButton </button>
        </div>
      </div>
    );
  }
}

export default App;
