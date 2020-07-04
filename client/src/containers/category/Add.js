import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CustomTextField from "../../components/forms/TextField";

const useStyles = makeStyles((theme) => ({}));

export default function CategoryAdd() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <CustomTextField
              className={classes.textField}
              fullWidth
              label="Category Title"
              id="category_title"
              variant="outlined"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <CustomTextField
              fullWidth
              label="Category Slug"
              id="category_slug"
              variant="outlined"
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <CustomTextField
              fullWidth
              multiline
              label="Category Description"
              id="category_description"
              variant="outlined"
              rows={5}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
