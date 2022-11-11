import React from "react";
import { Card,Button } from "antd";
import { CategoryCard } from "./CategoryItem.styled";


const CategoryItem = ({ type,  imageSrc, width }) => (
  <CategoryCard>
    <Card
      hoverable
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        width: "100%", //`${width}`,
        height: "250px",
        borderRadius: "10px",
        margin:0,
      }}
    ><div>
      <h1>{type}</h1>
      <Button>Show More</Button></div>
    </Card>
  </CategoryCard>
);

export default CategoryItem;
