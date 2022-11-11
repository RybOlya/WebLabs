import React, { useState, useEffect } from "react";

import CatalogApart from "../../Icons/render_1_karmanskoho.jpg";
import CatalogRetail from "../../Icons/retail_1.jpg";
import CatalogCottage from "../../Icons/render_2_konovaltsia.jpg";
import CatalogHouse from "../../Icons/Yaroslavenka_23a_1_1.jpg";

import {
  SectionWrapper,
  StyledText,
  StyledButton,
} from "./Home.styled";
import { List,Row,Col } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import CategoryItem from "../../components/Category/CategoryItem";
import Items from "containers/Catalog/Items";
import Data from "../Catalog/Data";

const itemsPerPage = 4;
let arrayForHoldingItems = [];
const category = [
  {
    type: "Apartments",
    image: CatalogApart,
    width: "200px",
  },
  {
    type: "Retail",
    image: CatalogRetail,
    width: "300px",
  },
  {
    type: "Cottages",
    image: CatalogCottage,
    width: "300px",
  },
  {
    type: "Houses",
    image: CatalogHouse,
    width: "43.75rem",
  },
];


const Home = () => {
  const [item, setItem] = useState(Data);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [next, setNext] = useState(4);

  const loopWithSlice = (start, end) => {
    const slicedItems = item.slice(start, end);
    arrayForHoldingItems = [...arrayForHoldingItems, ...slicedItems];
    setItemsToShow(arrayForHoldingItems);
  };

  useEffect(() => {
    loopWithSlice(0, itemsPerPage);
  }, []);

  const handleShowMoreItems = () => {
    loopWithSlice(next, next + itemsPerPage);
    setNext(next + itemsPerPage);
  };


  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Need an apartment?</h1>
          <p>Find homes to buy or rent and check house prices</p>
          <Link to={`/catalog/`}>
            <StyledButton size="large">Explore</StyledButton>
          </Link>
        </StyledText>
      </SectionWrapper>

      <List
        grid={{
          gutter: 0,
          column: 2,
        }}
        dataSource={category}
        renderItem={(item) => (
          <List.Item>
            <CategoryItem
              type={item.type}
              imageSrc={item.image}
              width={item.width}
              id={item.idx}
            />
          </List.Item>
        )}
      />
         <Items itemsToRender={itemsToShow} />
         <Row><Col span={24} style={{display:"flex",justifyContent:"center"}}><StyledButton style={{backgroundColor: "white",borderColor:"#6a3e19",color:"#6a3e19"}}onClick={handleShowMoreItems}>Load more</StyledButton></Col></Row> 
    </div>
  );
};

export default Home;
