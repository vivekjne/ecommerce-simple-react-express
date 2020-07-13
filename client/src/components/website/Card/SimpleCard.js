import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Divider, Box, Badge, Popover, IconButton, Tooltip } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Favorite from '@material-ui/icons/Favorite';
import SimpleCardDetails from '../CardDetails/SimpleCardDetails';


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
  },
  media: {
    overflow:"hidden",
    height: 160,
  },
  cardActionArea:{
      display:"flex",
      justifyContent:"space-between"
  },
  cardActionAreaItem:{
      display:"flex",
      flexDirection:"row",
      padding:theme.spacing(0)
  },
  cardActionAreaItemText:{
    padding:2
  },
  tag:{
      top:5,
      left:24,
  }
}));

export default (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setPopOver = ()=>{
      return(
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}            
        >
            <SimpleCardDetails></SimpleCardDetails>
        </Popover>
      )
  }
  return (
    <>
    <Card className={classes.root} onClick={handleClick}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
                title="React js"
            >
                <Badge
                    className={classes.tag}
                    overlap="circle"
                    badgeContent={"New"}
                    color="secondary" 
                    variant="standard"
                />
            </CardMedia>
            <CardContent>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Typography gutterBottom variant="subtitle2" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    Learn React js fundamentals
                </Typography>
                <Tooltip title="Add as favourite">
                    <IconButton spacing={0}>
                        <Favorite/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Typography variant="caption" color="textSecondary" component="p">
                Vivek Joy
            </Typography>
            <Rating size="small" name="read-only" value={4.5} readOnly />
            </CardContent>
        </CardActionArea>
        <Divider/>
        <CardActions className={classes.cardActionArea}>
            <Box m={1} className={classes.cardActionAreaItem} color="text.secondary">
                <TimerIcon color="text"/>
                <Typography variant="subtitle2" className={classes.cardActionAreaItemText}>6 hours</Typography>
            </Box>
            <Box m={1} className={classes.cardActionAreaItem}  color="text.secondary">
                <PlayArrow/>
                <Typography variant="subtitle2" className={classes.cardActionAreaItemText}>12 leasons</Typography>
            </Box>
        </CardActions>
    </Card>
    {setPopOver()}
    </>
  );
}