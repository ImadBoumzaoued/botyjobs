import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconNames, IconSvgPaths16, IconSvgPaths20 } from "@blueprintjs/icons";

export { IconNames };

class Icon extends PureComponent {
  static SIZE_STANDARD = 16;

  static SIZE_LARGE = 20;

  static propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    title: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    size: 16,
    color: "currentColor",
  };

  renderSvgPaths = (pathsSize, iconName) => {
    const svgPathsRecord =
      pathsSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
    const pathStrings = svgPathsRecord[iconName];

    if (pathStrings == null) {
      return null;
    }

    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />);
  };

  render() {
    const { color, icon, size, title = icon, ...svgProps } = this.props;
    let { style = {} } = this.props;

    if (icon == null) {
      return null;
    }
    if (typeof icon !== "string") {
      return icon;
    }

    const pixelGridSize =
      size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
    const paths = this.renderSvgPaths(pixelGridSize, icon);
    if (paths == null) {
      return null;
    }

    const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`;

    if (color !== null) {
      style = { ...style, fill: color };
    }

    return (
      <svg
        {...svgProps}
        style={style}
        data-icon={icon}
        width={size}
        height={size}
        viewBox={viewBox}
      >
        {title ? <title>{title}</title> : null}
        {paths}
      </svg>
    );
  }
}

export default Icon;
