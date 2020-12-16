import styled from "styled-components";

const Title = styled.h3``;

const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 1rem;
`;

const StatisticsData = styled.div`
  padding: 0.8rem 2rem;
  display: flex;
  flex-direction: column;
`;

const BarChart = styled.img`
  width: 5rem;
  height: auto;
`;

const BarChartValue = styled.p`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const BarChartType = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: gray;
`;

export {
  Title,
  StatisticsContainer,
  StatisticsData,
  BarChart,
  BarChartValue,
  BarChartType,
};
