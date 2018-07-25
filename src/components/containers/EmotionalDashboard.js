import React, {Component} from 'react';
import Chart from './units/Chart';

class EmotionalDashboard extends Component {
      constructor() {
            super();
            this.state = {
                  chartData: {}
            }
      }
      componentWillMount() {
            this.getChartData();

      }

      getChartData() {
            // Ajax calls here

            // Mocking up data
            this.setState({
                  chartData: {
                        labels: [
                              'Happy', 'Normal', 'Unhappy', 'Angry'
                        ],
                        datasets: [
                              {
                                    label: 'People',
                                    data: [
                                          6, 5, 3, 2
                                    ],
                                    backgroundColor: ['rgba(68, 231, 191, 1.0)', 'rgba(30, 167, 243, 1.0)', 'rgba(251, 229, 118, 1.0)', 'rgba(244, 128, 121, 1.0)']
                              }
                        ]
                  },
                  option: {
                        scales: {
                              yAxes: [
                                    {
                                          stacked: true,
                                          gridLines: {
                                                display: true,
                                                color: "red"
                                          },
                                          ticks: {
                                                fontColor: 'white'
                                          }
                                    }
                              ],
                              xAxes: [
                                    {
                                          gridLines: {
                                                display: false
                                          },
                                          ticks: {
                                                fontColor: 'white'
                                          }
                                    }
                              ]
                        }
                  }
            })

      }

      render() {
            return (<div className='align-self-center emoji-dashboard-box containers transparent-bg'>
                  <div className='center-center chart-containers'>
                        <Chart chartData={this.state.chartData} title="" legendPosition="" options={this.state.option}/>
                  </div>

            </div>)
      }
}

export default EmotionalDashboard
