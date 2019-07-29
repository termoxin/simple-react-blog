import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { StyledLayout } from "./StyledLayout";
import CommentsList from "../Comments/CommentList";
const { Title, Paragraph, Text } = Typography;

const Content = styled.div`
  width: 80vw;
`;

const Post = ({ post: { title, body, comments } }) => (
  <StyledLayout>
    <Content>
      <Title>{title}</Title>
      <Paragraph>{body}</Paragraph>
      <Text>Author: Rostislav</Text>
    </Content>
    {comments && <CommentsList />}
  </StyledLayout>
);

export default Post;
