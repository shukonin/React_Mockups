import React from "react";

import {
  MainContainer,
  DashboardContainer,
  ResumeContainer,
} from "./Layouts/style";
import { Navbar } from "./Components/Navbar";
import { SearchBar } from "./Components/SearchBar";
import { SalesSummary } from "./Components/SalesSummary";
import { RecentOrders } from "./Components/RecentOrders";
import { AccountButtons } from "./Components/AccountButtons";
import { Statistics } from "./Components/Statistics";
import { PaymentHistory } from "./Components/PaymentHistory";
import { Transactions } from "./Components/Transactions";

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
