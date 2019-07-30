import React, { Component } from "react";
import { Comment, Divider } from "antd";
import styled from "styled-components";
import CommentList from "./CommentList";
import { Editor } from "./Editor";

const WrapperComment = styled.div`
  width: 80vw;
`;

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
