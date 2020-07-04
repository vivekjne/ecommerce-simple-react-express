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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Test2 from "./Test2";

export default function Test() {
  //   const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" size="medium" color="inherit">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6">Heading</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <div
              style={{ background: "red", width: "100%", height: 200 }}
            ></div>
          </Grid>

          <Grid item md={6} xs={12}>
            <div
              style={{ background: "red", width: "100%", height: 200 }}
            ></div>
          </Grid>

          <Grid item xs={12}>
            <Grid
              style={{ background: "#fff", height: 200, color: "#fff" }}
              container
              alignItems="center"
              justify="center"
            >
              <Button
                variant="contained"
                fullWidth
                size="large"
                color="primary"
              >
                <Typography>Button</Typography>
              </Button>
            </Grid>
          </Grid>
          <Test2 />
        </Grid>
      </Container>
    </>
  );
}
