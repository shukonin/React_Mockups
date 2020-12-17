import styled from "styled-components";

const Title = styled.h3`
  margin: 1rem 0 0;
`;

const OptionsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  border-bottom: 1px solid lightgray;
  margin: 0.5rem 0 1rem;
`;

const Option = styled.li`
  padding: 0.5rem 2rem;
  font-size: 0.9rem;
  border-bottom: ${(props) => (props.active ? "3px solid blue" : "none")};
  color: ${(props) => (props.active ? "blue" : "gray")};

  &:hover {
    cursor: pointer;
    color: ${(props) => (!props.active ? "orange" : "blue")};
    border-bottom: ${(props) =>
      !props.active ? "3px solid orange" : "3px solid blue"};
  }
`;

const OptionContent = styled.div``;

const OptionTopData = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionTopDataValue = styled.div``;

const OptionTopDataExport = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.p`
  color: gray;
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0;
`;

const IndicatorValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Export = styled.p`
  font-size: 0.7rem;
  margin-right: 1rem;
`;

const ExportIcon = styled.i`
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const OptionChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0;
`;

export {
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
};
