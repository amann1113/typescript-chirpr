import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

export default class Template extends Component<ITemplateProps, ITemplateState> {

  constructor(props: ITemplateProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Template Page</h1>
      </div>
    );
  }

}

interface ITemplateProps extends RouteComponentProps {}
interface ITemplateState {}
