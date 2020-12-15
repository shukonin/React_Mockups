import React from "react";

const Dashboard = () => {
  return (
    <MainContainer>
      <Navbar />
      <DashboardContainer>
        <SearchBar />
        <SalesSummary />
        <RecentOrders />
      </DashboardContainer>
      <ResumeContainer>
        <AccountButtons />
        <Statistics />
        <PaymentHistory />
        <Transactions />
      </ResumeContainer>
    </MainContainer>
  );
};

export { Dashboard };
