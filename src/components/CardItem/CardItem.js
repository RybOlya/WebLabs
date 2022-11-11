import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";

import { IconsWrapper, IconBase } from "../Icon/Icon.styled";

import { CompassOutlined } from "@ant-design/icons";
const { Meta } = Card;

const CardItem = ({
  type,
  title = "No title.",
  description,
  location,
  imageSrc,
  price,
}) => (
  <Card
    hoverable
    style={{ width: "363px", borderRadius: "10px" }}
    cover={
      <img style={{ borderRadius: "10px" }} alt="example" src={imageSrc} />
    }
  >
    <p>{type}</p>
    <Meta
      style={{ minHeight: "150px" }}
      title={title}
      description={description}
    />
    <IconsWrapper>
      <IconBase component={CompassOutlined} color="#323747" />
      <p>{location}</p>
    </IconsWrapper>
    <Footer>
      <p>${price}</p>
      <Button>Show More</Button>
    </Footer>
  </Card>
);

export default CardItem;
