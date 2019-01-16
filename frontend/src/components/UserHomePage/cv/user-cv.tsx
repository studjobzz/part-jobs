import * as React from "react";
import { Component } from "react";
import { ProgressExample } from "src/shared/progressBar/progress-bar";
// import { H5, Intent, ProgressBar, Slider, Switch } from "@blueprintjs/core";

export interface Props {}

export interface State {}

const initialState: State = {};

export class UserCv extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div>
        <img src="./stillworking.jpg" />
      </div>
      // <ProgressExample id={"0"} />
      //   <div className="bp3-progress-bar bp3-intent-primary .modifier">
      //     <div className="bp3-progress-meter style:width: 50%" />
      //   </div>
    );
  }
}

export default UserCv;
