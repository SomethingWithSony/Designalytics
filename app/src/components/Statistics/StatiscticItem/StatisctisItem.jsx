import React from "react";
import './statisticsItem.scss'

function StatisticsItem (props) {
    return (
        <div className="statistic-item">
            <p className="value">{props.value}</p>
            <p className="title">{props.title}</p>
        </div>
    )
}

export default StatisticsItem;