import styled from "styled-components";

const Title = styled.h3``;

const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    border-radius: 1rem;
    background-color: #f0f0f0;
  }
`;

const TransactionIcon = styled.i`
  margin: 0 1rem 0 0.5rem;
`;

const TransactionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TransactionData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TransactionOrder = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.8rem;
`;

const TransactionDate = styled.p`
  margin: 0;
  color: gray;
  font-size: 0.7rem;
`;

const GoToIcon = styled.i``;

export {
  Title,
  TransactionContainer,
  TransactionIcon,
  TransactionContent,
  TransactionData,
  TransactionOrder,
  TransactionDate,
  GoToIcon,
};
