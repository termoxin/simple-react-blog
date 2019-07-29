import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shortenText } from "../../helpers/text";

const CardContainer = styled.div`
  display: flex;
  margin: 50px 10px 0 10px;
  align-items: stretch;
  width: 30%;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 30px;
`;

const Posts = ({ posts }) => {
  const postsCards = posts.map(({ title, body, id }) => (
    <CardContainer key={id}>
      <Card
        title={title}
        extra={<Link to={`/posts/${id}`}>More</Link>}
        style={{ width: "100%" }}
      >
        <p>{shortenText(body)}</p>
      </Card>
    </CardContainer>
  ));

  return <Row>{postsCards}</Row>;
};

export default Posts;
