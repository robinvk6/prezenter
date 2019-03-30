// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Editor from '../components/Template/Editor';
import routes from "../constants/routes";
import EditorRenderer from '../components/Template/EditorRenderer'

type Props = {};

export default class TemplateEditorContainer extends Component<Props> {
  props: Props;

  state = {
    template: {}
  }

  handleTemplateUpdate = (template) => {
    this.setState({...this.state, template});
  }

  render() {
    return <div className="container-fluid">
      <div data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x"/>
        </Link>
      </div>
      <div className="row">
        <div className="col-8">
          <EditorRenderer template={this.state.template} />
        </div>
        <div className="col-4">
          <Editor broadcastTemplateUpdate={this.handleTemplateUpdate} />
        </div>
      </div>
    </div>;
  }
}
