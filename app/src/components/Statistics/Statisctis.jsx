import React from "react";
import StatisticsItem from "./StatiscticItem/StatisctisItem";
import './statistics.scss'

function Statistics () {
    return (
        <div className="statistic">
            <StatisticsItem title="TODAY’S SALES" value="$756"/>
            <StatisticsItem title="LAST 7 DAYS" value="$4,301"/>
            <StatisticsItem title="CONVERSION" value="18"/>
        </div>
    )
}
 
export default Statistics