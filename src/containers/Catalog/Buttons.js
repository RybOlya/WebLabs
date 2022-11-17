import React from "react";
import {Radio} from 'antd'
import { StyledButton } from "../ItemPage/ItemPage.styled";
const Buttons = ({ filterItem, setItem, menuItems, dwelling }) => {
  return (
    <>
    
        {menuItems.map((Val, id) => {
          return (
            <StyledButton style={{backgroundColor: "#6a3e19",borderColor:"#6a3e19",color:"white"}}
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </StyledButton>
          );
        })}
        <StyledButton style={{backgroundColor: "#6a3e19",borderColor:"#6a3e19",color:"white"}}
          onClick={() => setItem(dwelling)}
        >
          All
        </StyledButton>
    </>
  );
};
 
export default Buttons;