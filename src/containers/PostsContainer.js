import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Spinner from "../components/Spinner";
import Posts from "../components/Posts";
import { getPosts } from "../actions/posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { loading, posts } = this.props;

    return !loading && !_.isNull(posts) ? <Posts posts={posts} /> : <Spinner />;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error
});

const mapDispatchToProps = {
  getPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
