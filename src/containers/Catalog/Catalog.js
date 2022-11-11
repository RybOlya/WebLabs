import React, { useState, useEffect } from "react";

import Data from "./Data";
import Buttons from "./Buttons";
import CardItem from "../../components/CardItem/CardItem";
import { Row, Col } from "antd";

import Items from "./Items";
import { StyledButton } from "containers/ItemPage/ItemPage.styled";
import { DownSquareFilled } from "@ant-design/icons";
const itemsPerPage = 8;
let arrayForHoldingItems = [];
const Catalog = () => {
  const [itemsToShow, setItemsToShow] = useState(Data);
  const [next, setNext] = useState(8);
  const [item, setItem] = useState(itemsToShow);
  const loopWithSlice = (start, end) => {
    const slicedItems = Data.slice(start, end);
    arrayForHoldingItems = [...arrayForHoldingItems, ...slicedItems];
    setItem(arrayForHoldingItems);
  };

  useEffect(() => {
    loopWithSlice(0, itemsPerPage);
  }, []);

  const handleShowMoreItems = () => {
    loopWithSlice(next, next + itemsPerPage);
    setNext(next + itemsPerPage);
  };

  const [title, setTitle] = useState("");
  const menuItems = [...new Set(itemsToShow.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = itemsToShow.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const searchItem = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const newItem = Data.filter((newVal) => {
        return newVal.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setItem(newItem);
    } else {
      setItem(itemsToShow);
    }
    setTitle(keyword);
  };

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };

  const handleSort = (value) => {
    if (value == "none") {
      setItem([...Data]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...Data];
      current.sort((a, b) =>
        toType
          ? compare(a.title, b.title, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setItem([...current]);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Row style={{ margin: "30px"}}>
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="search"
                value={title}
                onChange={searchItem}
                className="input"
                placeholder="Search"
              />
            </Col>
            <Col span={14} style={{ display: "flex", justifyContent: "center" }}>
              <Buttons
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
              />
            </Col>
            <Col span={4}>
              <select
                onChange={(e) => handleSort(e.target.value)}
                style={{ borderRadius: "5px", padding: "4px" }}
                class="cars"
                defaultValue={"One"}
              >
                <option value="none">Default</option>
                <option value="ascending">Alphabetically</option>
                <option value="descending">Non-Alphabetically</option>
                <option value="high">Low-High</option>
                <option value="low">High-Low</option>
              </select>
            </Col>
          </Row>
          <Items itemsToRender={item} />
          <Row>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <StyledButton
                style={{
                  backgroundColor: "white",
                  borderColor: "#6a3e19",
                  color: "#6a3e19",
                }}
                onClick={handleShowMoreItems}
              >
                Load more
              </StyledButton>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Catalog;
