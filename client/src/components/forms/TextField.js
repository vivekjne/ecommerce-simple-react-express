import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useInputStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#20bf6b",
    },
  },
});

export default function CustomTextField(props) {
  const classes = useInputStyles();

  return (
    <ThemeProvider theme={theme}>
      <TextField
        size="small"
        InputProps={{ classes }}
        {...props}
      />
    </ThemeProvider>
  );
}
