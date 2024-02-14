import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#000000",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "#ffffff",
    errorMessage: "#d73a4aff",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },

  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  backgroundColor: {
    appBar: "#24292e",
    main: "#e1e4e8",
    primary: "#0366d6",
    white: "#ffffff",
  },
  padding: {
    appBar: 20,
    main: 10,
    button: 10,
  },
  margin: {
    main: 10,
  },
};

export default theme;
