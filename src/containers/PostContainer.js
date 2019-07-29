import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import { getPost } from "../actions/post";

class PostContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getPost(id);
  }

  render() {
    const { loading, post } = this.props;

    // return (!loading && post && <Post />) || "Loading...";
    return <Post />;
  }
}

const mapStateToProps = state => ({
  post: state.post.post,
  loading: state.post.loading
});

const mapDispatchToProps = {
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
