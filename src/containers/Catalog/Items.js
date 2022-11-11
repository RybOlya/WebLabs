import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { List } from "antd";
import CardItem from "components/CardItem/CardItem";
const Items = ({ itemsToRender }) => {
  return (
    <List
      grid={{
        gutter: 0,
        column: 4,
      }}
      style={{ padding: "8px 8px " }}
      dataSource={itemsToRender}
      renderItem={(Val) => (
        <Link to={`/catalog/${Val.href}`}>
          <List.Item>
            <CardItem
              category={Val.category}
              title={Val.title}
              description={Val.description}
              location={Val.location}
              imageSrc={Val.image}
              price={Val.price}
              id={Val.idx}
            />
            <div key={Val.id}></div>
          </List.Item>
        </Link>
      )}
    />
  );
};
export default Items;
