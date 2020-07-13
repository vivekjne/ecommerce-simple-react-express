import React from 'react';
import { Typography, makeStyles, Container, Grid } from '@material-ui/core';
import Card from '../../components/website/Card/SimpleCard';

const useStyles = makeStyles(theme =>({
    container:{
        backgroundColor:"#fff",
        padding:theme.spacing(4)
    },
    gridContainer:{
        
    }
}))
export default (props)=>{

    const classes = useStyles();

    return(
        <Container color="primary" maxWidth="lg" className={classes.container}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4">Card Components</Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Card></Card>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Card></Card>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Card></Card>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Card></Card>
                </Grid>
            </Grid>

        </Container>
    )
}