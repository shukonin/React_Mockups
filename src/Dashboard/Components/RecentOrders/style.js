import styled from "styled-components";

const RecentOrdersContainer = styled.section``;

const HeadingsContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 40% 30% 15% 5%;
  padding: 0 1rem;
  border-radius: 1rem;
`;

const Header = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin: 0.8rem 0;
`;

const OrdersContainer = styled(HeadingsContainer)`
  background-color: white;
  grid-row-gap: 1rem;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const OrdersList = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
`;

const OrderAttribute = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
`;

export {
  RecentOrdersContainer,
  HeadingsContainer,
  Header,
  OrdersContainer,
  OrdersList,
  OrderAttribute,
};
