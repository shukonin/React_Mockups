import React from "react";
import {
  HeadingsContainer,
  Header,
  OrdersContainer,
  OrdersList,
  OrderAttribute,
} from "./style";

const Order = (props) => {
  const { id, name, date, amount } = props;
  return (
    <OrdersContainer>
      <OrderAttribute>{id}</OrderAttribute>
      <OrderAttribute>{name}</OrderAttribute>
      <OrderAttribute>{date}</OrderAttribute>
      <OrderAttribute>${amount}</OrderAttribute>
      <OrderAttribute>
        <i className="icon-circle-right" />
      </OrderAttribute>
    </OrdersContainer>
  );
};

const RecentOrders = () => {
  return (
    <>
      <h3>Recent Orders</h3>
      <HeadingsContainer>
        <Header>ID</Header>
        <Header>Name</Header>
        <Header>Date</Header>
        <Header>Amount</Header>
        <Header />
      </HeadingsContainer>
      <OrdersList>
        <Order id="3290" name="Sharon Bowers" date="May 23, 2020" amount="89" />
        <Order
          id="3289"
          name="Constance Willis"
          date="May 22, 2020"
          amount="74"
        />
        <Order
          id="3288"
          name="Josephine Ellis"
          date="May 20, 2020"
          amount="79"
        />
      </OrdersList>
    </>
  );
};

export { RecentOrders };
