import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  margin-top: 10px;
  width: 50%;
  height: auto;
`;

const User = ({ user }) => {
  const { avatar_url, login, bio } = user;

  return (
    <Card>
      <h1>{login}</h1>
      <Avatar src={avatar_url} alt="avatar" />
      <p>{bio}</p>
    </Card>
  );
};

export default User;
