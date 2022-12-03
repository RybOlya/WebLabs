import React from "react";
//import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { actions } from "../../containers/store";
import { CartImage } from "components/Cart/Cart.styled";
import {
  CloseSquareOutlined
} from "@ant-design/icons";
import { IconBase } from "components/Icon/Icon.styled";
const CartItem = (props) => {
  const dispatch = useDispatch();

  const quantityHandler = (event) => {
    dispatch(
      actions.addItemsToCart({
        href: props.href,
        title: props.title,
        price: props.price,
        imageSrc: props.imageSrc,
      })
    );
  };

  return (
    <div className="cart">
      <CartImage>
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            borderRadius: "10px",
          }}
          src={props.imageSrc}
        ></img>
      </CartImage>
      <div className="cart-details">
        <h2>{props.title}</h2>
        <h3>${props.price}</h3>
      </div>
      <div className="cart-changes">
        <label>Qty</label>
        <input
          type="number"
          onChange={quantityHandler}
          value={props.quantity}
          min="1"
        />
        <button type="button" onClick={props.onDelete}>
        <CloseSquareOutlined />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
