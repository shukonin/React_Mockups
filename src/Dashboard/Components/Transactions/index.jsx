import React from "react";

import {
  TransactionSection,
  Title,
  TransactionContainer,
  TransactionIcon,
  TransactionContent,
  TransactionData,
  TransactionOrder,
  TransactionDate,
  GoToIcon,
} from "./style";

const TransactionCard = (props) => {
  const { order, date } = props;

  return (
    <TransactionContainer>
      <TransactionIcon className="icon-checkmark" />
      <TransactionContent>
        <TransactionData>
          <TransactionOrder>Order #{order}</TransactionOrder>
          <TransactionDate>{date}</TransactionDate>
        </TransactionData>
        <GoToIcon className="icon-circle-right" />
      </TransactionContent>
    </TransactionContainer>
  );
};

const Transactions = () => {
  return (
    <TransactionSection>
      <Title>Transactions</Title>
      <TransactionCard order="34786" date="May 18, 2020" />
      <TransactionCard order="34720" date="May 14, 2020" />
      <TransactionCard order="34716" date="May 12, 2020" />
    </TransactionSection>
  );
};

export { Transactions };
