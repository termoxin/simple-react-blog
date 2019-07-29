import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shortenText } from "../../helpers/text";
import { Typography } from "antd";

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

const Posts = ({ posts }) => {
  const postsCards = posts.map(({ title, body, id, creator }) => (
    <CardContainer key={id}>
      <Card
        hoverable
        title={title}
        extra={
          <Link
            to={{
              pathname: `/posts/${id}`,
              state: {
                fromMain: true
              }
            }}
          >
            More
          </Link>
        }
        style={{ width: "100%" }}
      >
        <p>{shortenText(body)}</p>
        <Text strong> Author: {"Unknown" || creator}</Text>
      </Card>
    </CardContainer>
  ));

  return <Row>{postsCards}</Row>;
};

export default Posts;
