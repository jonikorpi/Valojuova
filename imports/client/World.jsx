import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Camera from "./Camera";
import Sky from "./Sky";
import AmbientLight from "./AmbientLight";

import Grid from "./Grid";

import PreLife from "./PreLife";
import Life from "./Life";

export default class World extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  getComponentByState(player) {
    console.log(player);

    if (player) {
      return (
        <Life player={player}/>
      );
    }
    else {
      return (
        <PreLife/>
      );
    }
  }

  getCameraCenter(playerLocation) {
    // const x =
    //   Variables.tilesPerRow * 0.5
    //   + Math.floor(playerLocation[0] / Variables.tilesPerRow)
    //   * Variables.tilesPerRow
    // ;
    // const y = 0;
    // const z =
    //   Variables.tilesPerColumn * 0.5
    //   + Math.floor(playerLocation[2] / Variables.tilesPerColumn)
    //   * Variables.tilesPerColumn
    //   + Variables.cameraOffsetZ
    // ;
    // return [-x,-y,-z];
    return [0,0,0];
  }

  render() {
    return (
      <Scene
        id="scene"
        vr-mode-ui={{
          enabled: true,
        }}
      >

        <Camera
          id="camera"
          width={this.props.gameState.width}
          height={this.props.gameState.height}
          inVR={this.props.gameState.inVR}
          devMode={this.props.gameState.devMode}
        />

        <Sky/>
        <AmbientLight/>

        <Grid/>

        <Entity
          id="outside-camera"
          position={this.getCameraCenter()}
        >

          {this.getComponentByState(this.props.player)}

        </Entity>

      </Scene>
    );
  }

}
