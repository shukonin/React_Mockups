import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../../Styles/fonts.css";

import {
  SalesSummaryContainer,
  Title,
  OptionsContainer,
  Option,
  OptionContent,
  OptionTopData,
  OptionTopDataValue,
  OptionTopDataExport,
  Indicator,
  IndicatorValue,
  Export,
  ExportIcon,
  OptionChartContainer,
} from "./style";

const OptionChart = () => {
  const data = [
    { name: "Jan", sales: 4000, orders: 2400, profit: 2400 },
    { name: "Feb", sales: 3000, orders: 1398, profit: 2210 },
    { name: "Mar", sales: 2000, orders: 9800, profit: 2290 },
    { name: "Apr", sales: 2780, orders: 3908, profit: 2000 },
    { name: "May", sales: 1890, orders: 4800, profit: 2181 },
    { name: "Jun", sales: 2390, orders: 3800, profit: 2500 },
    { name: "Jul", sales: 3490, orders: 4300, profit: 2100 },
  ];

  return (
    <OptionChartContainer>
      <ResponsiveContainer width="80%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 1, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
          <Line type="monotone" dataKey="profit" stroke="orange" />
        </LineChart>
      </ResponsiveContainer>
    </OptionChartContainer>
  );
};

const SalesSummary = () => {
  return (
    <SalesSummaryContainer>
      <Title>Sales Summary</Title>
      <OptionsContainer>
        <Option active>Product</Option>
        <Option>Services</Option>
        <Option>Referral</Option>
      </OptionsContainer>
      <OptionContent>
        <OptionTopData>
          <OptionTopDataValue>
            <Indicator>Current Balance</Indicator>
            <IndicatorValue>$ 8,690.00</IndicatorValue>
          </OptionTopDataValue>
          <OptionTopDataExport>
            <Export>Export report</Export>
            <ExportIcon className="icon-download" />
          </OptionTopDataExport>
        </OptionTopData>
        <OptionChart />
      </OptionContent>
    </SalesSummaryContainer>
  );
};

export { SalesSummary };
