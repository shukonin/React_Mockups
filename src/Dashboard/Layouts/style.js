import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 6rem 60% auto;
  height: 100vh;
`;

const DashboardContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ResumeContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export { MainContainer, DashboardContainer, ResumeContainer };
