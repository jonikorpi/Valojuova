import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Text from "./Text";
import Rotator from "./Rotator";

export default class Target extends Component {

  constructor(props) {
    super();
  }

  componentDidUpdate() {
    console.log("target updated");
  }

  render() {
    return (
      <Rotator rotation={this.props.rotation}>

        <Entity
          class="target-clicker"
          geometry={{
            primitive: "circle",
            radius: Variables.targetRadius + Variables.cursorSize * 2,
          }}
          material={{
            shader: "flat",
            transparent: true,
            opacity: 0,
          }}
          onClick={this.props.doOnClick}
        />

        <Entity
          class="target-ring"
          geometry={{
            primitive: "ring",
            radiusInner: Variables.targetRadius * Variables.targetThickness,
            radiusOuter: Variables.targetRadius,
          }}
          material={{
            color: "white",
            shader: "flat",
          }}
          onClick={this.props.doOnClick}
        />

        <Entity
          class="target-UI"
          position={[
            Variables.targetMargin,
            0,
            0,
          ]}
        >

          {this.props.children}

        </Entity>

      </Rotator>
    );
  }

}
