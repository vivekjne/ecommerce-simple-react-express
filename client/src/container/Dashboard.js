import React from "react";
import Card from '../components/layout/Card'
import ShopingCart from '@material-ui/icons/ShoppingCart';
import Store from '@material-ui/icons/Store';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../components/layout/Chart'
import { yellow } from '@material-ui/core/colors';
import ListComponent from '../components/layout/List';
import Table from '../components/layout/Table'
const styles = theme =>  ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    
    
  },
 
});


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      barChartData:{
        labels: [
          'Jun 18',
          'Jun 19',
          'Jun 20',
          'Jun 21',
          'Jun 22',
          'Jun 18',
          'Jun 19',
          'Jun 20',
          'Jun 21',
          'Jun 22'
        ],
        datasets: [
          {
            label: '2019',
            backgroundColor: '#fb3d4e',
            data: [
              132,
              712,
              412,
              412,
              321,
              712,
              132,
              432,
              321,
              432,
            ]
            },
        {
          label: '2020',
          backgroundColor: '#5949d6',
          data: [
            100,
            230,
            140,
            1600,
            350,
            530,
            1200,
            740,
            160,
            270,
            710,
            1300,
            360,
            560,
            1100,
            760,
          ],
        
      }
        ]
    },
    pieChartData:{
      labels:['Red','Yellow','Blue'],
      datasets: [
        {
        
          data: [
            10,20,30
          ],
          backgroundColor: ["#ff6384", "#ffcd56", "#36a2eb"]
        }
      ]
    }
    }
  }

  
  
 
  render(){
    
    const {classes} =  this.props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
         <Card
            mainTitle='4,545'
            subTitle='Total Users'
            icon={<ShopingCart color='secondary' style={{ fontSize: 50 }}/>}
      />
        </Grid>
        <Grid item xs={3}>
            <Card
      mainTitle='1,340'
      subTitle='Total Stores'
      icon={<Store style={{ fontSize: 50 ,color: yellow[500] }}/>}
      />
        </Grid>
        <Grid item xs={3}>
         
          <Card
      mainTitle='$ 6,567'
      subTitle='Order Value'
      icon={<ShopingCart color='action' style={{ fontSize: 50 }}/>}
      />
         
        </Grid>
        <Grid item xs={3}>
         
          <Card
      mainTitle='234'
      subTitle='Total Orders'
      icon={<ShopingCart color='primary' style={{ fontSize: 50 }}/>}
      />
         
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <div style={{padding:"10px"}}>
        <Chart type="bar" barChartData={this.state.barChartData}></Chart></div>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <div style={{padding:"10px"}}>
          <Chart type="pie" pieChartData={this.state.pieChartData}></Chart></div>
      </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} className={classes.paper}>
          <ListComponent/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Table/>
    
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Table/>
          </Paper>
        </Grid>
      </Grid>
    </div>
    
  );
  }
}

export default withStyles(styles)(Dashboard);

