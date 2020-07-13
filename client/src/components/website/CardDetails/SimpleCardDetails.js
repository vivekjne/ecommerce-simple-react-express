import React from 'react';
import { Container, Grid, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TickIcon from '@material-ui/icons/Check';

import TimerIcon from '@material-ui/icons/Timer';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme)=>({
    container:{
        padding:10,
        maxWidth:300
    },
    rowDirection:{
        display:"flex",
        flexDirection:"row",
    },
    defaultPadding:{
        padding:10
    }
}))
//https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png
export default (props) =>{
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Grid container direction="column"> 
                <Grid item>
                    <Grid container direction="row" spacing={1}> 
                        <Grid item>
                            <Avatar variant="square" src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"></Avatar>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column"> 
                                <Grid item>
                                    <Typography variant="body1">Learn React funtamentals</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption" color="textSecondary">with Vivek Joy</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="caption" color="textSecondary">Learn the fundamentals of working with Angular and how to create basic applications</Typography>
                </Grid>
                <Grid item>
                    <ul>
                        <li><Typography variant="caption" color="textSecondary">Fundamentals of working with Angular</Typography></li>
                        <li><Typography variant="caption" color="textSecondary">Create complete Angular applications</Typography></li>
                        <li><Typography variant="caption" color="textSecondary">Understanding Dependency Injection</Typography></li>
                        <li><Typography variant="caption" color="textSecondary">Testing with Angular</Typography></li>
                    </ul>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justify="space-around">
                        <Grid item className={classes.rowDirection} spacing={2}>
                            <TimerIcon color="textSecondary"/>
                            <Typography style={{display:"flex",alignItems:"center",paddingLeft:2}} variant="subtitle2" color="textSecondary">50 minute left</Typography>
                        </Grid>
                        <Grid item className={classes.rowDirection}>
                            <PlayArrow color="textSecondary"/>
                            <Typography  style={{display:"flex",alignItems:"center",paddingLeft:2}} variant="subtitle2" color="textSecondary">12 leasons</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.defaultPadding}>
                    <Grid container direction="row" justify="space-evenly">
                        <Button variant="contained" color="primary">Resume</Button>
                        <Button variant="outlined" color="secondary">Start Over</Button>
                    </Grid>
                </Grid>
                <Grid item className={classes.defaultPadding}>
                    <Grid container direction="row">
                        <Typography variant="caption" color="textSecondary">Your rating </Typography>
                        <Rating
                            size="small"
                            value={4}
                        /> 
                        <Typography variant="caption" color="textSecondary">4/5</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}