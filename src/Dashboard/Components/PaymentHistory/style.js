import styled from "styled-components";

const PaymentSection = styled.section``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 0;
`;

const Title = styled.h3`
  margin: 0;
`;

const Settings = styled.i`
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const PaymentStatContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  margin: 1rem 0;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px gray;
  }
`;

const PaymentStatGraph = styled.p`
  color: white;
  font-weight: bold;
  margin: 0 1rem;
`;

const PaymentStatContent = styled.div`
  margin: 0.8rem;
`;

const PaymentStatTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 0.8rem;
`;

const PaymentStatValue = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
`;

export {
  PaymentSection,
  Title,
  Settings,
  TitleContainer,
  PaymentStatContainer,
  PaymentStatGraph,
  PaymentStatContent,
  PaymentStatTitle,
  PaymentStatValue,
};
