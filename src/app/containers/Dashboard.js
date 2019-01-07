import React, { Component } from "react";
import { compose } from "redux";
import { Spring, config, animated } from "react-spring";
import { Line, Bar } from "react-chartjs-2";
import { Flex, Box } from "common/components/Grid";
import Card from "common/components/Card";
import { css, withStyles } from "withStyles";
import Icon from "../../common/components/Icon";
import { getColor } from "../../common/utils/themeHelpers";
import TodosDashboardWidget from "../components/TodosDashboardWidget";

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          display: false,
        },
      },
    ],
  },
  tooltips: {
    backgroundColor: "#fff",
    titleFontFamily: "Poppins",
    titleFontColor: "#000",
    bodyFontFamily: "Poppins",
    bodyFontColor: "#000",
    borderColor: getColor("scales", "N5"),
    cornerRadius: 3,
    borderWidth: 1,
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: getColor("orange", "light"),
      borderColor: getColor("orange"),
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: getColor("orange"),
      pointBackgroundColor: getColor("orange", "light"),
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: getColor("orange", "light"),
      pointHoverBorderColor: getColor("orange"),
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [95, 89, 80, 81, 56, 55, 40].reverse(),
    },
  ],
};

const dataOffers = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: getColor("green", "light"),
      borderColor: getColor("green"),
      borderDashOffset: 0.0,
      borderJoinStyle: "round",
      pointBorderColor: getColor("green"),
      pointBackgroundColor: getColor("green", "light"),
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: getColor("green", "light"),
      pointHoverBorderColor: getColor("green"),
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [15, 29, 30, 41, 56, 65, 80],
    },
  ],
};

const dataBar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      backgroundColor: getColor("purple", "light"),
      data: [95, 89, 80, 81, 56, 55, 40].reverse(),
    },
  ],
};

const lineRef = React.createRef();
const barRef = React.createRef();

class Dashboard extends Component {
  render() {
    const { styles } = this.props;
    return (
      <React.Fragment>
        <h3>Dashboard</h3>
        <Flex mx={-15}>
          <Box width={1 / 4} pl={15} pr={15}>
            <Card px={"1.5rem"} position="relative" py={"1rem"}>
              <Flex flexDirection="column">
                <h6 {...css(styles.cardName)}>Traffic</h6>
                <h3 {...css(styles.cardHeading, styles.bigger)}>
                  <Spring
                    config={config.wobbly}
                    from={{ number: 0 }}
                    to={{ number: 82387 }}
                  >
                    {props => (
                      <animated.div>{props.number.toFixed()}</animated.div>
                    )}
                  </Spring>
                </h3>
              </Flex>
              <div {...css(styles.iconHolder)}>
                <Icon
                  {...css(styles.icon)}
                  icon={"timeline-line-chart"}
                  size={24}
                />
              </div>
            </Card>
          </Box>
          <Box width={1 / 4} pl={15} pr={15}>
            <Card position="relative" px={"1.5rem"} py={"1rem"}>
              <Flex flexDirection="column">
                <h6 {...css(styles.cardName)}>New candidates</h6>
                <h3 {...css(styles.cardHeading, styles.bigger)}>
                  <Spring from={{ number: 0 }} to={{ number: 450 }}>
                    {props => (
                      <animated.div>{props.number.toFixed()}</animated.div>
                    )}
                  </Spring>
                </h3>
              </Flex>
              <div {...css(styles.iconHolder, styles.purpleHolder)}>
                <Icon
                  {...css(styles.icon, styles.purpleIcon)}
                  icon={"people"}
                  size={24}
                />
              </div>
            </Card>
          </Box>
          <Box width={1 / 4} pl={15} pr={15}>
            <Card px={"1.5rem"} py={"1rem"} position="relative">
              <Flex flexDirection="column">
                <h6 {...css(styles.cardName)}>Interviews</h6>
                <h3 {...css(styles.cardHeading, styles.bigger)}>45</h3>
              </Flex>
              <div {...css(styles.iconHolder, styles.orangeHolder)}>
                <Icon
                  {...css(styles.icon, styles.orangeIcon)}
                  icon={"chat"}
                  size={24}
                />
              </div>
            </Card>
          </Box>
          <Box width={1 / 4} pl={15} pr={15}>
            <Card px={"1.5rem"} py={"1rem"} position="relative">
              <Flex flexDirection="column">
                <h6 {...css(styles.cardName)}>Offers</h6>
                <h3 {...css(styles.cardHeading, styles.bigger)}>15</h3>
              </Flex>
              <div {...css(styles.iconHolder, styles.greenHolder)}>
                <Icon
                  {...css(styles.icon, styles.greenIcon)}
                  icon={"confirm"}
                  size={24}
                />
              </div>
            </Card>
          </Box>
        </Flex>
        <Flex mx={-15} my={30}>
          <Box width={1 / 3} pl={15} pr={15}>
            <Card px={"1.5rem"} py={"0.5rem"} overflow="hidden">
              <Flex flexDirection="column" width="100%">
                <h6 {...css(styles.cardName)}>Overview</h6>
                <h3 {...css(styles.cardHeading)}>Applications</h3>
                <Box mx={-28} mb={-10}>
                  <Line ref={lineRef} data={data} options={options} />
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box width={1 / 3} pl={15} pr={15}>
            <Card px={"1.5rem"} py={"0.5rem"} overflow="hidden">
              <Flex flexDirection="column" width="100%">
                <h6 {...css(styles.cardName)}>Performance</h6>
                <h3 {...css(styles.cardHeading)}>Candidates</h3>
                <Box ref={barRef} mx={-28} mb={-10}>
                  <Bar data={dataBar} options={options} />
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box width={1 / 3} pl={15} pr={15}>
            <Card px={"1.5rem"} py={"0.5rem"} overflow="hidden">
              <Flex flexDirection="column" width="100%">
                <h6 {...css(styles.cardName)}>Performance</h6>
                <h3 {...css(styles.cardHeading)}>Offers</h3>
                <Box ref={barRef} mx={-28} mb={-10}>
                  <Line ref={lineRef} data={dataOffers} options={options} />
                </Box>
              </Flex>
            </Card>
          </Box>
        </Flex>
        <Flex mx={-15} my={30}>
          <Box width={1 / 2} px={15}>
            <Card px={"1.5rem"} py={"1rem"} overflow="hidden">
              <Flex flexDirection="column" width="100%">
                <h6 {...css(styles.cardName)}>Upcoming Todos</h6>
                <h3 {...css(styles.cardHeading)}>Todo items</h3>
                <TodosDashboardWidget />
              </Flex>
            </Card>
          </Box>
          <Box width={1 / 2} px={15}>
            <Card px={"1.5rem"} py={"1rem"} overflow="hidden">
              <Flex flexDirection="column" width="100%">
                <h6 {...css(styles.cardName)}>Upcoming events</h6>
                <h3 {...css(styles.cardHeading)}>Calendar items</h3>
              </Flex>
            </Card>
          </Box>
        </Flex>
      </React.Fragment>
    );
  }
}

const styled = withStyles(({ color, unit }) => ({
  root: {
    fontSize: unit.getRem(13),
  },
  cardName: {
    color: color.scales.N7A,
    textTransform: "uppercase",
    margin: 0,
    fontSize: unit.getRem(9),
  },
  cardHeading: {
    margin: "5px 10px 0 0",
    fontSize: unit.getRem(14),
  },
  bigger: {
    fontSize: unit.getRem(18),
  },
  iconHolder: {
    backgroundColor: color.primary.light,
    width: 48,
    height: 48,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "85%",
    transform: "translate(-50%, -50%)",
  },
  icon: {
    color: color.primary.base,
  },
  purpleHolder: {
    backgroundColor: color.purple.light,
  },
  purpleIcon: {
    color: color.purple.base,
  },
  orangeHolder: {
    backgroundColor: color.orange.light,
  },
  orangeIcon: {
    color: color.orange.base,
  },
  greenHolder: {
    backgroundColor: color.green.light,
  },
  greenIcon: {
    color: color.green.base,
  },
}));

Dashboard.tabProps = {
  label: "Dashboard",
  icon: "dashboard",
  iconActive: "dashboard",
  href: "/",
};

export default compose(styled)(Dashboard);
