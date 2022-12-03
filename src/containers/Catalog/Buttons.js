import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import { StyledButton } from "../ItemPage/ItemPage.styled";
import MenuItems from "components/MenuItems";
const Buttons = ({
  setItem,
  setFilterResults,
  dwellings,
}) => {

  function handleFilterChange(filterVal) {
    const resultsArray = dwellings.filter(
      (dwellings) => dwellings.category === filterVal
    );
    console.log(filterVal);
    if (!filterVal || filterVal==="All") {
      setItem(dwellings)
      setFilterResults(dwellings);
    } else {
      setItem(resultsArray)
      setFilterResults(resultsArray);
    }
  }
  return (
    <>
      {MenuItems.map((Val) => {
        return (
          <StyledButton
            style={{
              backgroundColor: "#6a3e19",
              borderColor: "#6a3e19",
              color: "white",
            }}
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            value={"All"}
            onClick={()=>handleFilterChange(Val)}
          >
            {Val}
          </StyledButton>
        );
      })}
    </>
  );
};

export default Buttons;
