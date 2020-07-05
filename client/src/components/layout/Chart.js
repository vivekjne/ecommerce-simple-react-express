import React, { Component } from 'react';
import { Bar,Doughnut } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType:props.type,
      barChartData: props.barChartData,
      pieChartData:props.pieChartData
    };
  }

  render() {
    return (
      <div className="chart">
        
          {this.state.chartType==="bar"?<Bar
            data={this.state.barChartData}
            width={100}
            height={50}
            options={{
              title: {
                display: true,
                text: 'Orders',
                fontSize: 18,
                position: 'top',
                margin: 10,
                fontFamily: 'Lato',
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
          />:
      
        <Doughnut
            data={this.state.pieChartData}
            
            options={{
              title: {
                display: true,
                text: 'Stores',
                fontSize: 18,
                position: 'top',
                margin: 10,
                fontFamily: 'Lato',
              },
            }}
          />}
        </div>
    
    );
  }
}

export default Chart;
