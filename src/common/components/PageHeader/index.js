import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "../Grid";
import Icon from "../Icon";

const PageHeader = props => {
  return (
    <Flex>
      <Box>{props.tabName}</Box>
      <Box>
        <div className="crumbs">
          <Icon icon={"home"} size={32} />
        </div>
      </Box>
      <Box>actions</Box>
    </Flex>
  );
};

PageHeader.propTypes = {
  tabName: PropTypes.string,
  type: PropTypes.oneOf("tabs", "sideRight", "sideLeft"),
  actions: PropTypes.arrayOf(PropTypes.object),
};

export default PageHeader;
