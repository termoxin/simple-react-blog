import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Spinner from "../components/Spinner";
import Posts from "../components/Posts";
import { getPosts } from "../actions/posts";
import { createPost } from "../actions/post";

class PostsContainer extends Component {
  state = { visible: false, name: "", author: "", text: "" };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    const { getPosts, createPost } = this.props;
    const { name, author, text } = this.state;

    if (name && author && text) {
      createPost({ title: name, creator: author, body: text }).then(() => {
        getPosts();
      });

      this.setState({
        visible: false
      });
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { loading, posts } = this.props;
    const { visible } = this.state;

    return !loading && !_.isNull(posts) ? (
      <Fragment>
        <Posts
          posts={posts}
          visible={visible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          showModal={this.showModal}
          onHandleChange={this.handleChange}
        />
      </Fragment>
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error
});

const mapDispatchToProps = {
  getPosts,
  createPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
