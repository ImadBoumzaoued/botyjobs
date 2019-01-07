import React, { Component } from "react";
import { compose } from "redux";
import styled from "styled-components";

import Card from "common/components/Card";
import { Table, TR, TH, TD, TableFooter } from "common/components/Table";
import Button from "common/components/Button";
import Icon from "common/components/Icon";
import { withStyles, css, theme } from "withStyles";
import Badge from "common/components/Badge";
import { Box, Flex } from "../../common/components/Grid";

const AvatarsWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid white;
  margin-right: -16px;
  &:nth-child(1) {
    z-index: 4;
  }
  &:nth-child(2) {
    z-index: 3;
  }
  &:nth-child(3) {
    z-index: 2;
  }
  &:nth-child(4) {
    z-index: 1;
  }
`;

const HasMore = styled.div`
  background: white;
  border: 2px solid ${props => props.theme.color.gray2};
  color: ${props => props.theme.color.black};
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 2px;
  margin-left: 18px;
  font-size: 12px;
  font-weight: 600;
  &:after {
    content: '+${props => props.left}';
  }

`;

class JobList extends Component {
  randomStatus = () => {
    const colors = ["green", "red", "yellow"];
    const n = (Math.random() * 2).toFixed(0);
    const names = { 0: "active", 1: "archived", 2: "pending" };
    return {
      color: colors[n],
      text: names[n],
    };
  };
  generateRandom = () => {
    return [...Array(20).keys()].map(n => {
      const status = this.randomStatus();
      return (
        <TR key={n}>
          <TD>Front end developer</TD>
          <TD>Casablanca</TD>
          <TD>Morocco</TD>
          <TD textAlign="center">
            <Badge color={status.color}>{status.text}</Badge>
          </TD>
          <TD textAlign="center">{(Math.random() * 10).toFixed(0)}</TD>
          <TD>
            <AvatarsWrapper>
              <Img
                src={`http://i.pravatar.cc/150?img=${(
                  Math.random() * 10
                ).toFixed(0)}`}
                alt="user"
              />
              <Img
                src={`http://i.pravatar.cc/150?img=${(
                  Math.random() * 10
                ).toFixed(0)}`}
                alt="user"
              />
              <Img
                src={`http://i.pravatar.cc/150?img=${(
                  Math.random() * 10
                ).toFixed(0)}`}
                alt="user"
              />
              <Img
                src={`http://i.pravatar.cc/150?img=${(
                  Math.random() * 10
                ).toFixed(0)}`}
                alt="user"
              />
              <HasMore left={(Math.random() * 10).toFixed(0)} />
            </AvatarsWrapper>
          </TD>
          <TD textAlign="center">
            <Button size="sm" icon="eye-open" color="primary">
              &nbsp;View
            </Button>
            &nbsp;
            <Button size="sm" icon="delete" color="red">
              &nbsp;Archive
            </Button>
          </TD>
        </TR>
      );
    });
  };

  render() {
    const { styles } = this.props;
    return (
      <Card col>
        <Flex>
          <Box width={1 / 2}>
            <h3 {...css(styles.pageHeading)}>
              <Icon
                icon="th"
                size={25}
                color={theme.color.text.default}
                style={{ marginRight: 10 }}
              />
              &nbsp;Job list
            </h3>
          </Box>
          <Box
            css={{
              display: "flex",
            }}
            px={10}
            mr={25}
            justifyContent="flex-end"
            alignItems="center"
            width={1 / 2}
          >
            <Button
              px={0}
              size="sm"
              minimal
              color="primary"
              icon="filter-list"
            />
          </Box>
        </Flex>

        <Table fullWidth table>
          <thead>
            <TR>
              <TH textAlign="left">Title</TH>
              <TH textAlign="left">City</TH>
              <TH textAlign="left">Country</TH>
              <TH>Status</TH>
              <TH># of questions</TH>
              <TH textAlign="left">Applicants</TH>
              <TH>Actions</TH>
            </TR>
          </thead>
          <tbody>{this.generateRandom()}</tbody>
        </Table>
        <TableFooter>
          <Button size="sm" mr={1} color="primary">
            1
          </Button>
          <Button size="sm" outline>
            2
          </Button>
        </TableFooter>
      </Card>
    );
  }
}

const sc = withStyles(({ color, unit }) => ({
  pageHeading: {
    color: color.text,
    fontWeight: 300,
    fontSize: unit.getRem(25),
    paddingLeft: 15,
  },
  activeBadge: {
    backgroundColor: color.success,
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    marginRight: 5,
  },
}));

JobList.tabProps = {
  label: "Job list",
  icon: "th",
  iconActive: "th",
  href: "/jobs/list",
};

export default compose(sc(JobList));
