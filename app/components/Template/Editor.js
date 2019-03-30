import React, { Component } from 'react';

const fs = require('fs');
const { dialog } = require('electron').remote;

export default class Editor extends Component {

    state = {
      template: {}
    }

    updateTemplateState = (key,value) => {
      const { template } = this.state;
      template[key] = value;
      this.setState({...this.state, template});
      this.props.broadcastTemplateUpdate(template);
    }

    handleOpenFile = (event) => {
      const {id} = event.target;
      dialog.showOpenDialog((fileNames) => {
        // fileNames is an array that contains all the selected
        if (fileNames === undefined) {
          console.log("No file selected");
          return;
        }
        this.updateTemplateState(id,fileNames[0]);
      });
    }

    handleInputUpdate = (event) => {
      const { id, value } = event.target;
      this.updateTemplateState(id,value);
    }

    render() {
        return(<div className="col">
            <h4>TEMPLATE EDITOR {this.state.template.templateName ? this.state.template.templateName : null}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Template Name</label>
              <input type="email" className="form-control" id="templateName" placeholder="Enter Template Name" onChange={this.handleInputUpdate}></input>
            </div>

            <div className="form-group">
              <label>Default Background Media</label>
              <button className="btn btn-primary form-control" id="backgroundImage" onClick={this.handleOpenFile}>Button</button>
            </div>
            <div className="form-group">
              {
                this.state.template.backgroundImage ? <img src={this.state.template.backgroundImage} className="img-thumbnail" alt="Responsive image"></img> : null
              }
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
              <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
            </div>
          </form>
        </div>);
    }
}
