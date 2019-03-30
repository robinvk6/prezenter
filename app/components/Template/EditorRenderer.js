import React, { Component } from 'react';
import electron from 'electron'

export default class EditorRenderer extends Component {

  render(){
    return(<div>
      <img src={this.props.template.backgroundImage} className="img-fluid" alt="Responsive image"></img>
    </div>)
  }
}
