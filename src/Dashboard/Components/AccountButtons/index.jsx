import React from "react";

import "../../Styles/fonts.css";
import Avatar from "../../Assets/Katina.svg";
import {
  AccountButtonsContainer,
  NotificationsButton,
  UserAvatar,
} from "./style";

const AccountButtons = () => {
  return (
    <AccountButtonsContainer>
      <NotificationsButton className="icon-bell" />
      <UserAvatar src={Avatar} alt="User Avatar" />
    </AccountButtonsContainer>
  );
};

export { AccountButtons };
