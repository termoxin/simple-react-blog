import React from "react";
import { Row, Col } from "antd";
import Post from "../Post";

const Posts = props => {
  return (
    <Row>
      <Col>
        <Post />
      </Col>
    </Row>
  );
};

export default Post;
