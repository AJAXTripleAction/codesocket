import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const consoleStyle = {
  height: { 
    'height': '75%',
    overflow: 'auto'
  },
  width: {
    'marginRight': '10px'

    // 'whiteSpace': 'pre-wrap'
  },
  styling: {
    listStyle: 'none',

  }
};
const consoleFrame = {
  // border: '1px solid black',
  marginTop: '0px',
  paddingTop: '10px',
  //marginLeft: '-20px',
  color: 'white',
  fontSize: '1.1em',
  //background: '#000'
};

const ConsolePresentation = (props) => {
    return (
      <div style={consoleFrame}>
        <div style={{textAlign: 'center'}}>Javascript Console Output</div>
        <ul id="console" 
          className="ql-editor" 
          style={Object.assign(consoleStyle.height, consoleStyle.width, consoleStyle.styling)}>
        </ul>
      </div>
      )
}

export default ConsolePresentation;