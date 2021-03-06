import React from "react";
import { Typography } from "antd";
import moment from "moment";
import styled from "styled-components";
import { StyledLayout } from "./StyledLayout";
import Comments from "../Comments";
const { Title, Paragraph, Text } = Typography;

const Content = styled.div`
  padding-top: 50px;
  width: 80vw;
`;

const Post = ({
  post: [content, comments],
  onCreateComment,
  onGetPost,
  isCreatingComment
}) => {
  const { title, body, creator, id, date } = content;

  return (
    <StyledLayout theme="light">
      <Content>
        <Title>{title}</Title>
        <Paragraph>{body}</Paragraph>
        <Text>Author: {creator || "Unknown"}</Text>
        <br />
        <Text underline>{moment(date).fromNow()}</Text>
      </Content>
      {comments && (
        <Comments
          comments={comments}
          onCreateComment={onCreateComment}
          onGetPost={onGetPost}
          postId={id}
          isCreatingComment={isCreatingComment}
        />
      )}
    </StyledLayout>
  );
};

export default Post;
