import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../components/User";
import { getUser } from "../actions/user";

class UserContainer extends Component {
  componentDidMount() {
    const username = this.props.match.params.username;

    this.props.getUser(username);
  }

  render() {
    const { loading, user } = this.props;

    return (!loading && user && <User user={user} />) || "Loading...";
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.user.loading
});

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
