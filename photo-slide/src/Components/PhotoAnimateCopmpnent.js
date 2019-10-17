import React, { Component } from "react";
import "../Components-CSS/PhotoAnimate.css";

export default class PhotoAnimateCopmpnent extends Component {
  state = {
    isActive: false,
    animStyle: "o-kv-slider_slide active"
  };

  componentDidMount() {
    this.changeStyle();
  }

  createSlices = () => {
    let photoHolder =
      "https://tsubametaxi-yamato.com/wp-content/themes/tsubametaxi-yamato.com/assets/images/top/kv02.png";
    let slices = [];
    for (let i = 0; i < 50; i++) {
      slices.push(
        <div
          key={i}
          className="o-kv-slider_slide_slice"
          style={{ backgroundImage: `url(${photoHolder})` }}
        />
      );
    }
    return slices;
  };

  changeStyle = () => {
    setInterval(() => {
      this.setState({ isActive: !this.state.isActive });
      if (this.state.isActive) {
        this.setState({ animStyle: "o-kv-slider_slide" });
      } else {
        return this.setState({ animStyle: "o-kv-slider_slide active" });
      }
    }, 3000);
  };

  render() {
    console.log(this.state.isActive);
    return <div className={this.state.animStyle}>{this.createSlices()}</div>;
  }
}
