import React from "react";

import "../../Styles/fonts.css";
import {
  PaymentSection,
  Title,
  TitleContainer,
  PaymentStatContainer,
  PaymentStatGraph,
  PaymentStatContent,
  PaymentStatTitle,
  PaymentStatValue,
  Settings,
} from "./style";

const PaymentStat = (props) => {
  const { graph, title, value, color } = props;
  return (
    <PaymentStatContainer color={color}>
      <PaymentStatGraph>{graph}</PaymentStatGraph>
      <PaymentStatContent>
        <PaymentStatTitle>{title}</PaymentStatTitle>
        <PaymentStatValue>${value}</PaymentStatValue>
      </PaymentStatContent>
    </PaymentStatContainer>
  );
};

const PaymentHistory = () => {
  return (
    <PaymentSection>
      <TitleContainer>
        <Title>Payment History</Title>
        <Settings className="icon-equalizer" />
      </TitleContainer>
      <PaymentStat
        graph="75%"
        title="Average Income"
        value="12,380.00"
        color="black"
      />
      <PaymentStat
        graph="25%"
        title="Average Spend"
        value="2,620.00"
        color="blue"
      />
    </PaymentSection>
  );
};

export { PaymentHistory };
