import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ImgUrl from '../assets/shoppping-cart.png'
const useStyles = makeStyles({
  root: {
    borderRadius:"10px",
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  image: {
    maxWidth: '50px',
    maxHeight: '50px',
  },
  container:{
    display:'flex',
    flexDirection:'row'
  }
  
});

export default function CardComponet(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
      {props.icon}
      </CardContent>
      <CardContent>
        <Typography variant="h7" component="h2">
         {props.mainTitle}
        </Typography>
        <Typography color="textSecondary">
          {props.subTitle}
        </Typography>
      </CardContent>  
    </Card>
  );
}
