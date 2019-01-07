import React, { Component } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";

import cameraIcon from "common/assets/camera.svg";

import BaseInput from "./BaseInput";

const PictureButton = styled.div`
  background-color: ${props => props.theme.color.scales.N3};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
`;

const InvisibleInput = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const LoadedPicture = styled.img`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  object-fit: cover;
  border-radius: ${props => props.borderRadius};
`;

const CameraIcon = styled.img`
  height: 30px;
  width: auto;
  object-fit: contain;
`;

class PictureInput extends Component {
  constructor(props) {
    super(props);
    this.reader = new FileReader();
    this.reader.onload = this.handleFileLoaded;
    let currentImageURL = null;
    if (props.field.value) {
      currentImageURL = props.field.value;
    }
    this.state = {
      currentImageURL,
    };
    this.loadValueFromUrl(props.field.value);
  }

  loadValueFromUrl = async url => {
    if (!url) return;
    const result = await fetch(url);
    const blob = await result.blob();
    const file = new File([blob], "");
    this.props.onChange(file);
  };

  handleFileLoaded = e => {
    const dataURL = e.target.result;
    this.setState({
      currentImageURL: dataURL,
    });
  };

  handleFile = files => {
    if (files[0]) {
      this.reader.readAsDataURL(files[0]);
      this.props.field && this.props.onChange && this.props.onChange(files[0]);
    }
  };

  render() {
    const { currentImageURL } = this.state;
    return (
      <BaseInput {...this.props}>
        <PictureButton {...this.props}>
          <CameraIcon src={cameraIcon} />
          {currentImageURL && (
            <LoadedPicture src={currentImageURL} {...this.props} />
          )}
          <InvisibleInput>
            <Dropzone onDrop={this.handleFile} />
          </InvisibleInput>
        </PictureButton>
      </BaseInput>
    );
  }
}

export default PictureInput;
