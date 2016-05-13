import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

export default class Rotator extends Component {

  render() {
    return (
      <Entity
        class="rotator"
        rotation={this.props.rotation || [0,0,0]}
      >

        <Entity
          class="locator"
          position={[
            0,
            0,
            -this.props.distance || -Variables.UIRadius,
          ]}
        >

          {this.props.children}

        </Entity>

      </Entity>
    );
  }

}
