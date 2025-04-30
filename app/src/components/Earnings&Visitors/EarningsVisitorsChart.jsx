import React, { Component } from "react";
import Chart from "react-apexcharts";

import './earningsVisitorsChart.scss'

class EarningsVisitorsChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "sales-chart",
                    type: "line",
                    zoom: {
                        enabled: false
                    },
                    // background: '#292B31',
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
                    colors: ["#5E85F8", "#01FFFF"],
                    strokeColors: ["#5E85F8", "#01FFFF"]
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

                tooltip: {
                    enabled: false,
                    x: {
                        show: false
                    },

                },
                colors: ["#5E85F8", "#01FFFF"],
            },


            series: [
                {
                    name: "Visitors",
                    data: [300, 600, 210, 500, 900, 250, 200],
                },
                {
                    name: "Earnings",
                    data: [300, 350, 700, 680, 630, 520, 200],
                }

            ]
        };
    }

    render() {
        return (
            <div className="earnings-visitiors-section">
                <h2>Earnings & Visitors</h2>
                <div className="app earnings-visitors-chart-container">
                    <div className="row">
                        <div className="mixed-chart ">
                            <div className="earnings-visitors-chart-wrapper">
                                <Chart
                                    options={this.state.options}
                                    series={this.state.series}
                                    type="line"
                                    height="100%"
                                    width="100%"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EarningsVisitorsChart;
