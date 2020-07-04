import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider,
  withTheme,
} from "@material-ui/core/styles";
import { orange, purple, green } from "@material-ui/core/colors";

const CustomTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: { main: orange[500] },
  },
});

function getColor(color, state = "normal") {
  switch (color) {
    case "primary":
      return purple[state == "hover" ? 700 : 500];
    case "secondary":
      return orange[state == "hover" ? 700 : 500];

    default:
      return green[state == "hover" ? 700 : 500];
  }
}

const ColorButton = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.common.white,
      backgroundColor: (props) => getColor(props.color),
      "&:hover": {
        backgroundColor: (props) => getColor(props.color, "hover"),
      },
    },
  };
})(Button);
export default function Test2() {
  //   const classes = useStyles();
  return (
    <>
      <Grid item md={4} lg={3} xs={12}>
        <ColorButton variant="contained" fullWidth size="large">
          <Typography>Button</Typography>
        </ColorButton>
      </Grid>
      <Grid item md={4} lg={3} xs={12}>
        <ColorButton
          variant="contained"
          fullWidth
          size="large"
          color="secondary"
        >
          <Typography>Button</Typography>
        </ColorButton>
      </Grid>
      {/* <ThemeProvider theme={theme}> */}
      <Grid item md={4} lg={3} xs={12}>
        <ColorButton variant="contained" fullWidth size="large" color="primary">
          <Typography>Button</Typography>
        </ColorButton>
      </Grid>
      {/* </ThemeProvider> */}

      <Grid item md={4} lg={3} xs={12}>
        <ColorButton variant="contained" fullWidth size="large" color="primary">
          <Typography>Button</Typography>
        </ColorButton>
      </Grid>
    </>
  );
}
