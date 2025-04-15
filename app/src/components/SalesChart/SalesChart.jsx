import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import Chart from "react-apexcharts";

import './salesChart.scss'

class SalesChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: "120px",
            options: {
                chart: {
                    id: "sales-chart",
                    type: "line",
                    zoom: {
                        enabled: false
                    },
                    background: '#5E85F8',
                    fontFamily: 'Inter',
                    toolbar: {
                        show: false,
                    },
                    
                   
                },

                grid: {
                    show: false,

                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                markers: {
                    size: 2,
                    colors: ["#FFFFFF"]
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false
                    },
                    crosshairs: {
                        show: false,
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    
                   
                },
                yaxis: {
                    labels: {
                        show: false,
                    },


                },
                tooltip: {
                    enabled: false,
                    x: {
                      show: false
                    }, 
                    
                },
                colors: ["#FFFFFF"],
            },


            series: [
                {
                    name: "sales",
                    data: [1, 1.5, 3, 4.5, 4.7, 6,8],
                    

                }
            ]
        };
    }

    render() {
        return (
            <div className="app sales-chart-container">
                <div className="row">
                    <div className="mixed-chart sales-chart">
                        <div className="sales">
                            <p>13 <span>Sales</span></p>
                        </div>
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            height={120}
                            width={265}
                            
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesChart;
