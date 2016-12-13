import { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import './MainEditor.css';

class MainEditor extends Component {
  render () {
    // Create your element.
    var el = ReactFauxDOM.createElement('div')

    // Change stuff using actual DOM functions.
    // Even perform CSS selections!
    el.style.setProperty('color', 'red')
    el.setAttribute('class', 'main-editor')

    // Render it to React elements.
    return el.toReact()
  }
}

export default MainEditor;