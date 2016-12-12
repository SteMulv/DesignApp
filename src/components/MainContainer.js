import React, { Component } from 'react';
import './MainContainer.css';

// extending a basic react component (you can ignore this)
class MainContainer extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    //this.changeTab = this.changeTab.bind(this);
  }

  render() {
    // render re-renders whenever props or state change
    // in this case we are passing currentTab as a prop from App
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.currentTab}</h2>
        <a href="#" onClick={this.props.changeTab}>Change Tab</a>
        {this.props.currentTab === 'one' && <div className="tab-one"><h2>This is tab One</h2></div>}
        {this.props.currentTab === 'two' && <div className="tab-two"><h2>This is tab Two</h2></div>}
      </div>
    );
  }
}

// export must be the same name as the class created above!
export default MainContainer;
