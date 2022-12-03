import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import { Row, Col } from "antd";
import axios from "axios";
import Items from "./Items";
import { StyledButton } from "containers/ItemPage/ItemPage.styled";
import getAllDwellings from "./Dwelling";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import Dwelling from "./Dwelling";
import * as API from "./GetData";
import { getDwellings } from "../../api/axios";
import SearchBar from "./SearchBar";
const itemsPerPage = 8;
let arrayForHoldingItems = [];

const Catalog = () => {
  const [dwellings, setDwellings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [itemsToShow, setItemsToShow] = useState(filterResults);
  const [next, setNext] = useState(8);
  const [item, setItem] = useState(filterResults);
  useEffect(() => {
    loopWithSlice(0, itemsPerPage);
    getDwellings()
      .then((response) => {
        const allDwellings = response;
        setIsLoading(false);
        setDwellings(allDwellings);
        setFilterResults(dwellings);
        setItemsToShow(filterResults);
        setItem(filterResults);
      })
      .catch((error) => console.error(`Error:${error}`));
  }, []);

  const loopWithSlice = (start, end) => {
    const slicedItems = item ? item.slice(start, end) : [];
    arrayForHoldingItems = [...arrayForHoldingItems, ...slicedItems];
    setItem(arrayForHoldingItems);
    console.log(item);
  };

  const handleShowMoreItems = () => {
    loopWithSlice(next, next + itemsPerPage);
    setNext(next + itemsPerPage);
  };

  const menuItems = [
    ...new Set(dwellings ? dwellings.map((Val) => Val.category) : []),
  ];
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
      setItem([...dwellings]);
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
      let current = [...dwellings];
      current.sort((a, b) =>
        toType
          ? compare(a.title, b.title, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      console.log(current);
      setItem([...current]);
    }
  };
  const renderDwellings = <Items itemsToRender={item} />;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Row style={{ margin: "30px" }}>
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <SearchBar
                dwellings={item}
                setItem={setItem}
                setSearchResults={setSearchResults}
              />
            </Col>
            <Col
              span={14}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Buttons
                setFilterResults={setFilterResults}
                setItem={setItem}
                menuItems={menuItems}
                dwellings={dwellings}
              />
            </Col>
            <Col span={4}>
              <select
                onChange={(e) => handleSort(e.target.value)}
                style={{ borderRadius: "5px", padding: "4px" }}
                class="dwellings"
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
          {isLoading ? <LoadingSpinner /> : renderDwellings}
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
