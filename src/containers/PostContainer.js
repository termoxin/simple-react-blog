import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Post from "../components/Post";
import PostNotFound from "../components/Post/PostNotFound";
import Spinner from "../components/Spinner";
import { getPost } from "../actions/post";

class PostContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getPost(id);
  }

  render() {
    const { loading, post, error } = this.props;

    if (!loading && !_.isNull(post)) {
      return <Post post={post} />;
    } else {
      return error ? <PostNotFound /> : <Spinner />;
    }
  }
}

const mapStateToProps = state => ({
  post: state.post.post,
  loading: state.post.loading,
  error: state.post.error
});

const mapDispatchToProps = {
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
