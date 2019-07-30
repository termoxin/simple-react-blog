import React from "react";
import { Button, Typography, Card, Form, Input } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shortenText } from "../../helpers/text";
import Modal from "../../components/Modal";

const { Text } = Typography;

const CardContainer = styled.div`
  display: flex;
  margin: 50px 10px 0 10px;
  align-items: stretch;
  width: 31.5%;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 30px;
`;

const ButtonCreate = styled(Button)`
  && {
    position: fixed;
    top: 15px;
    left: 90%;
  }
`;

const PostsWrapper = styled.div`
  position: relative;
`;

const Posts = ({
  posts,
  visible,
  handleCancel,
  handleOk,
  showModal,
  onHandleChange
}) => {
  const postsCards = posts.map(({ title, body, id, creator }) => (
    <CardContainer key={id}>
      <Card
        hoverable
        title={title}
        extra={<Link to={`/posts/${id}`}>More</Link>}
        style={{ width: "100%" }}
      >
        <p>{shortenText(body)}</p>
        <Text strong> Author: {creator || "Unknown"}</Text>
      </Card>
    </CardContainer>
  ));

  return (
    <PostsWrapper>
      <Row>{postsCards}</Row>
      <Modal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        title="Create post"
      >
        <Form>
          <Form.Item>
            <Input
              type="name"
              placeholder="Name"
              name="name"
              onChange={onHandleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="name"
              placeholder="Author"
              name="author"
              onChange={onHandleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              rows={4}
              placeholder="Text"
              name="text"
              onChange={onHandleChange}
            />
          </Form.Item>
        </Form>
      </Modal>
      <ButtonCreate onClick={showModal}>Create post</ButtonCreate>
    </PostsWrapper>
  );
};

export default Posts;
