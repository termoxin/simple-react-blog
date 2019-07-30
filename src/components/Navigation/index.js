import React from "react";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => (
  <PageHeader
    title={
      <Link to="/">
        <h1>Blog</h1>
      </Link>
    }
  />
);

export default Navigation;
