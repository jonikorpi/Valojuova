import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Text from "./Text";
import Rotator from "./Rotator";

export default class Life extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <Entity id="life">

        <Rotator rotation={[20,0,0]}>
          <Text text={["Hello", "there."]}/>
        </Rotator>

      </Entity>
    );
  }

}
