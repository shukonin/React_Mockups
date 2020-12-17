import React from "react";

import OrdersBarChart from "../../Assets/bar-chart-blue.png";
import ReturnsBarChart from "../../Assets/bar-chart.png";

import {
  StatisticsSection,
  Title,
  StatisticsContainer,
  StatisticsData,
  BarChart,
  BarChartValue,
  BarChartType,
} from "./style";

const Statistics = () => {
  return (
    <StatisticsSection>
      <Title>Statistics</Title>
      <StatisticsContainer>
        <StatisticsData>
          <BarChart src={OrdersBarChart} alt="" />
          <BarChartValue>15.980</BarChartValue>
          <BarChartType>Orders</BarChartType>
        </StatisticsData>
        <StatisticsData>
          <BarChart src={ReturnsBarChart} alt="" />
          <BarChartValue>4.324</BarChartValue>
          <BarChartType>Returns</BarChartType>
        </StatisticsData>
      </StatisticsContainer>
    </StatisticsSection>
  );
};

export { Statistics };
