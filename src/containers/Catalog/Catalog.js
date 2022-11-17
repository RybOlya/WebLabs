import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import { Row, Col } from "antd";
import axios from 'axios';
import Items from "./Items";
import { StyledButton } from "containers/ItemPage/ItemPage.styled";
import dwelling from "./GetData";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
const itemsPerPage = 8;
let arrayForHoldingItems = [];
const Catalog = () => {
  const [dwelling, setDwelling] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(dwelling);
  const [next, setNext] = useState(8);
  //const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(itemsToShow);
  const [errorMessage, setErrorMessage] = useState("");
  // useEffect(() => {
  //   console.log("Fetching...");
  //   fetch('http://localhost:8000/api/dwelling/')
  //     .then((response) => response.json())
  //     .then((data) =>{
  //       console.log(data.dwelling)
  //       setDwelling(data.dwelling);
  //     });
  // },[]);
  const handleFetch = () => {
  setIsLoading(true);
  axios.get("http://localhost:8000/api/dwelling/")
  .then(response => {
    console.log(response.data.dwelling);
    setDwelling(response.data.dwelling);
    setIsLoading(false);
    setItem(dwelling);
  }, error => {
    console.log(error);
    setIsLoading(false);
  });
};


  const loopWithSlice = (start, end) => {
    const slicedItems = dwelling ? dwelling.slice(start, end): [];
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
  const menuItems = [...new Set(dwelling ? dwelling.map((Val) => Val.category):[])];
  const filterItem = (curcat) => {
    const newItem = dwelling?dwelling.filter((newVal) => {
      return newVal.category === curcat;
    }):[];
    setItem(newItem);
  };

  const searchItem = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const newItem = dwelling ? dwelling.filter((newVal) => {
        return newVal.title.toLowerCase().startsWith(keyword.toLowerCase());
      }):[];
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
      setItem([...itemsToShow]);
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
      let current = [...dwelling];
      current.sort((a, b) =>
        toType
          ? compare(a.title, b.title, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      console.log(current)
      setItem([...current]);
    }
  };
  const renderDwellings = (
<Items itemsToRender={item} />
  )
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
                dwelling={dwelling}
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
          {isLoading ? <LoadingSpinner /> : renderDwellings}
          <Row>
          <button onClick={handleFetch} disabled={isLoading}>
        Fetch Users
      </button>
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
