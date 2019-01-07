import React, { memo } from "react";
import { StyledAlert } from "./styled";
import { Intent } from "config/constants";
import { Flex, Box } from "../Grid";
import Text from "../typography/Text";
import Heading from "../typography/Heading";
import { theme } from "withStyles";
import Icon from "../Icon";
import Button from "../Button";

const getIconPropsForIntent = (intent, color) => {
  const props = {
    color,
  };
  switch (intent) {
    case Intent.SUCCESS:
      props.icon = "tick-circle";
      break;
    case Intent.DANGER:
      props.icon = "error";
      break;
    case Intent.WARNING:
      props.icon = "warning-sign";
      break;
    case Intent.BASE:
    default:
      props.icon = "info-sign";
  }
  return props;
};

const getIconForIntent = (intent, color) => {
  return <Icon size={14} {...getIconPropsForIntent(intent, color)} />;
};

const Alert = ({
  title,
  intent,
  hasIcon,
  isRemoveable,
  onRemove,
  children,
  ...props
}) => {
  return (
    <StyledAlert intent={intent} {...props}>
      {hasIcon && (
        <Box mt={"2px"} mr={10} ml={2} height={14}>
          {getIconForIntent(intent, theme.color.intent[intent])}
        </Box>
      )}
      <Flex width="100%">
        <Box flex="1 1 0%">
          <Heading as="h4" size={400} m={0} mt={"2px"}>
            {title}
          </Heading>
          {typeof children === "string" ? (
            <Text fontSize={14} fontWeight={400} color="muted">
              {children}
            </Text>
          ) : (
            children
          )}
        </Box>
        {isRemoveable && (
          <Box ml={24} flexShrink={0}>
            <Button icon="cross" minimal size="sm" onClick={onRemove} />
          </Box>
        )}
      </Flex>
    </StyledAlert>
  );
};

Alert.defaultProps = {
  intent: "base",
  hasIcon: true,
  isRemoveable: false,
};

export default memo(Alert);
