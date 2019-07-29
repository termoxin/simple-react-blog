import React from "react";
import { Comment, List } from "antd";

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${
      comments.length > 1 ? "comments" : "comment"
    }`}
    itemLayout="horizontal"
    renderItem={({ creator, body }) => (
      <Comment author={creator} content={<p>{body}</p>} />
    )}
  />
);

export default CommentList;
