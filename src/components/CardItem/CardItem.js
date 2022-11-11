import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";
import { Link } from "react-router-dom";
import { IconsWrapper, IconBase } from "../Icon/Icon.styled";

import { CompassOutlined } from "@ant-design/icons";
const { Meta } = Card;

const CardItem = ({
  category,
  title = "No title.",
  description,
  href,
  location,
  imageSrc,
  price,
}) => (
    <Card
      hoverable
      style={{ width: "98%", borderRadius: "10px" }}
      cover={
        <img
          style={{objectFit: "cover", borderRadius: "10px",width: "100%", height: "337px"}}
          alt="example"
          src={imageSrc}
        />
      }
    >
      <p>{category}</p>
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
