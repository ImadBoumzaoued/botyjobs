import React, { memo } from "react";
import Shadow from "./styled";

const Dropshadow = props => {
  const { canClickThrough, isTinted, onShadowClicked } = props;
  const onClick = canClickThrough ? null : onShadowClicked;
  const containerProps = { canClickThrough, isTinted, onClick };
  return <Shadow {...containerProps} />;
};

export default memo(Dropshadow);
