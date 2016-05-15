import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
import "aframe-text-component";

import Variables from "../Variables";

export default class Text extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  getLines(text, style, weight, size, height, color, doOnClick, lineHeight) {
    let texts;

    if (typeof text === "string") {
      texts = [text];
    }
    else {
      texts = text;
    }

    return texts.map(
      function(line, i) {
        return (
          <Entity
            class="text-line"
            text={{
              text: line,
              style: style || "normal",
              weight: weight || "normal",
              size: size,
              height: height || 0,
              font: "helvetiker",
              curveSegments: 12,
            }}
            material={{
              color: color || "white",
              shader: "flat",
            }}
            onClick={doOnClick}
            position={[
              0,
              -lineHeight * size * i,
              0,
            ]}
          />
        );
      }
    );
  }

  render() {
    return (
      <Entity
        class="text-block"
        position={this.props.position || [0,0,0]}
        rotation={this.props.rotation || [0,0,0]}
        look-at={this.props.lookAtCamera ? "#camera" : ""}
      >

        {this.getLines(
          this.props.text,
          this.props.style,
          this.props.weight,
          this.props.size || 0.3,
          this.props.height,
          this.props.color,
          this.props.doOnClick,
          this.props.lineHeight || 1.382,
        )}

      </Entity>
    );
  }

}
