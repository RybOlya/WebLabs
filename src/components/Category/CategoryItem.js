import React from "react";
import { Card, Button } from "antd";
import { CategoryCard } from "./CategoryItem.styled";
import { Link } from "react-router-dom";
const CategoryItem = ({ type, imageSrc}) => (
  <CategoryCard>
    <Card
      hoverable
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        width: "95%",
        height: "250px",
        borderRadius: "10px",
        margin: 0,
      }}
    >
      <div>
        <h1>{type}</h1>
        <Link to={`/catalog/`}>
          <Button>Show More</Button>
        </Link>
      </div>
    </Card>
  </CategoryCard>
);

export default CategoryItem;
