import React, { Component } from "react";
import { Comment, Form, Button, Input, Divider } from "antd";
import styled from "styled-components";
import CommentList from "./CommentList";

const { TextArea } = Input;

const WrapperComment = styled.div`
  width: 80vw;
`;

const Editor = ({ onChange, onSubmit, submitting, values }) => (
  <div>
    <Form.Item>
      <Input
        placeholder="Name..."
        name="name"
        onChange={onChange}
        value={values.name}
      />
    </Form.Item>
    <Form.Item>
      <TextArea
        rows={4}
        onChange={onChange}
        value={values.message}
        name="message"
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

export default class extends Component {
  state = {
    name: "",
    message: ""
  };

  handleSubmit = () => {
    const { name, message } = this.state;
    const { onCreateComment, postId } = this.props;

    if (name && message) {
      const data = {
        postId,
        creator: name,
        body: message
      };

      this.setState({
        name: "",
        message: ""
      });

      onCreateComment(data);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, message } = this.state;
    const { comments, isCreatingComment } = this.props;

    return (
      <WrapperComment>
        <Divider />
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={isCreatingComment}
              values={{ name, message }}
            />
          }
        />
      </WrapperComment>
    );
  }
}
