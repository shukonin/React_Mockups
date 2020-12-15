import styled from "styled-components";

const AccountButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NotificationsButton = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;

  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const UserAvatar = styled.img`
  width: 2rem;
  height: auto;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

export { AccountButtonsContainer, NotificationsButton, UserAvatar };
