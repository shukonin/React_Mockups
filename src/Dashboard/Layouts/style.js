import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 6rem 60% auto;
  height: 100vh;
`;

const DashboardContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1rem 3rem;
`;

const ResumeContainer = styled.div`
  padding: 1rem 3rem;
`;

export { MainContainer, DashboardContainer, ResumeContainer };
