import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { css, withStyles } from "react-with-styles";

export const theme = {
  color: {
    primary: {
      dark: "#084B8A",
      base: "#1070CA",
      light: "#DDEBF7",
      lightest: "#F7F9FD",
    },
    neutral: {
      dark: "#234361",
      base: "#425A70",
      light: "#E4E7EB",
      lightest: "#F9F9FB",
    },
    red: {
      dark: "#BF0E08",
      base: "#EC4C47",
      light: "#FAE2E2",
      lightest: "#FEF6F6",
    },
    orange: {
      dark: "#95591E",
      base: "#D9822B",
      light: "#FAE3CD",
      lightest: "#FDF8F3",
    },
    yellow: {
      dark: "#7E6514",
      base: "#F7D154",
      light: "#FBE6A2",
      lightest: "#FEF8E7",
    },
    green: {
      dark: "#00783E",
      base: "#47B881",
      light: "#D4EEE2",
      lightest: "#F1FAF5",
    },
    teal: {
      dark: "#007489",
      base: "#14B5D0",
      light: "#D2EEF3",
      lightest: "#F1FBFC",
    },
    purple: {
      dark: "#37248f",
      base: "#735DD0",
      light: "#EAE7F8",
      Lightest: "#F8F7FC",
    },
    border: {
      base: "#E4E7EB",
      muted: "#EDF0F2",
    },
    text: {
      muted: "#66788A",
      default: "#425A70",
      dark: "#234361",
      selected: "#1070CA",
      success: "#00783E",
      info: "#084B8A",
      danger: "#BF0E08",
      warning: "#95591E",
    },
    intent: {
      base: "#1070CA",
      success: "#47B881",
      danger: "#EC4C47",
      warning: "#D9822B",
    },
    scales: {
      N1: "#F9F9FB",
      N2: "#F5F6F7",
      N3: "#EDF0F2",
      N4: "#E4E7EB",
      N5: "#C7CED4",
      N6: "#A6B1BB",
      N7: "#7B8B9A",
      N8: "#66788A",
      N9: "#425A70",
      N10: "#234361",
      // Transparent variants.
      N1A: "rgba(67, 90, 111, 0.04)",
      N2A: "rgba(67, 90, 111, 0.06)",
      N3A: "rgba(67, 90, 111, 0.09)",
      N4A: "rgba(67, 90, 111, 0.14)",
      N5A: "rgba(67, 90, 111, 0.3)",
      N6A: "rgba(67, 90, 111, 0.47)",
      N7A: "rgba(67, 90, 111, 0.7)",
      N8A: "rgba(67, 90, 111, 0.81)",
    },
    sidebar: {
      background: "#002140",
      active: "#1890ff",
    },
    borderGray: "#DDD",
    danger: "#e74444",
    success: "#70da9d",
    sideBg: "#002140",
    sidebarBadgeText: "#13645d",
    sidebarActiveTabBg: "#1890ff",
    white2: "rgba(255, 255, 255, 0.9)",
    white4: "rgba(255, 255, 255, 0.5)",
    bodyBackground: "#f0f6ff",
    gray2: "#D8DCDF",
    gray3: "#E8EAEC",
    gray4: "#C0C0C8",
    gray5: "#D8D8D8",
    stripedRow: "#F3F8FE",
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`;
    },
  },
};

ThemedStyleSheet.registerTheme(theme);

ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemedStyleSheet };
