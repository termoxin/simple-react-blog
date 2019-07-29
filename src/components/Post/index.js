import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { StyledLayout } from "./StyledLayout";
import Comments from "../Comments";
const { Title, Paragraph, Text } = Typography;

const Content = styled.div`
  padding-top: 50px;
  width: 80vw;
`;

const Post = ({ post: [content, comments], onCreateComment, onGetPost }) => {
  const { title, body, creator, id } = content;

  return (
    <StyledLayout>
      <Content>
        <Title>{title}</Title>
        <Paragraph>{body}</Paragraph>
        <Text>Author: {"Unknown" || creator}</Text>
      </Content>
      {comments && (
        <Comments
          comments={comments}
          onCreateComment={onCreateComment}
          onGetPost={onGetPost}
          postId={id}
        />
      )}
    </StyledLayout>
  );
};

export default Post;
