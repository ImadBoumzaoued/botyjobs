import styled from "styled-components";
import {
  space,
  color,
  width,
  height,
  fontSize,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  flex,
  order,
  alignSelf,
  position,
} from "styled-system";

export const Box = styled.div`
  ${space};
  ${color};
  ${width};
  ${height};
  ${fontSize};
  ${flex};
  ${order};
  ${alignSelf};
  ${alignItems};
  ${justifyContent};
  ${position};
  ${props => props.css};
  box-sizing: border-box;
`;

Box.displayName = "Box";

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
};

export const Flex = styled(Box)(
  {
    display: "flex",
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
);

Flex.displayName = "Flex";

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
};
