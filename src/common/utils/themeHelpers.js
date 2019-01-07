import * as Color from "color";
import _get from "lodash/get";
import { Intent } from "config/constants";
import { theme } from "withStyles";

export const px = n => (typeof n === "number" ? `${n}px` : n);

export const lighten = (color, deg = 0.3) =>
  Color(color)
    .fade(deg)
    .string();

export const darken = (color, deg = 0.2) =>
  Color(color)
    .darken(deg)
    .string();

export const fade = (color, deg = 0.95) =>
  Color(color)
    .fade(deg)
    .string();

export const blacken = (color, deg = 0.6) =>
  Color(color)
    .darken(deg)
    .string();

export const getColor = (color, shade = "base") => {
  const validColors = Object.keys(theme.color);
  const defaultColor = "primary";
  if (validColors.indexOf(color) === -1) {
    // eslint-disable-next-line
    console.warn(
      `Invalid color given '${color}', using default color '${defaultColor}'`,
    );
    color = defaultColor;
  }
  return _get(theme, `color.${color}.${shade}`);
};

export const getTextColorForIntent = (intent, defaultColor) => {
  switch (intent) {
    case Intent.SUCCESS:
      return theme.colors.text.success;
    case Intent.DANGER:
      return theme.colors.text.danger;
    case Intent.WARNING:
      return theme.colors.text.warning;
    default:
      return defaultColor || theme.colors.text.default;
  }
};

export const baseTransition = () => {
  const safeTransitionProperties = [
    "color",
    "border-style",
    "visibility",
    "background",
    "background-color",
    "text-decoration",
    "box-shadow",
    "transform",
    "opacity",
  ];
  return safeTransitionProperties
    .map(prop => `${prop} .2s cubic-bezier(0.175, 0.885, 0.32, 1.175)`)
    .join(",");
};
