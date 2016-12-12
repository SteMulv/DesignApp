import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // initial state of the component
    this.state = {
      tab: 'one',
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(event) {
    // prevent link from routing to href url
    event.preventDefault();
    // create a new variable that is the opposite (bool ? valIfTrue : valIfFalse)
    const newTab = this.state.tab === 'one' ? 'two' : 'one';
    // set the state of this component to 'newTab'
    this.setState({
      tab: newTab,
    })
  }

  render() {
    // render re-renders whenever props or state change
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Current tab is {this.state.tab}</h2>
          <a href="#" onClick={this.changeTab}>Change Tab</a>
        </div>
        <MainContainer currentTab={this.state.tab} changeTab={this.changeTab}></MainContainer>
      </div>
    );
  }
}

export default App;
