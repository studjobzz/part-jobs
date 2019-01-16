import * as React from "react";
import { Component } from "react";

export interface Props {}

export interface State {}

export class UserCareer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src="./stillworking.jpg" />
      </div>
    );
  }
}

export default UserCareer;
