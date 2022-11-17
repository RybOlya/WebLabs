import React from "react";
//import "./Cart.css";
import {MinusSquareOutlined} from "@ant-design/icons"
import { useDispatch } from "react-redux";
import { actions } from "../../containers/store/index";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const quantityHandler = (event) => {
    dispatch(
      actions.addItemsToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        imageSrc: props.imageSrc,
        quantity: event.target.value
      })
    );
  };

  return (
    <div className="cart">
      <img className="cart-image" src={props.imageSrc} alt="shoes" />
      <div className="cart-details">
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
      </div>
      <div className="cart-changes">
        <label>Qty</label>
        <input
          type="number"
          onChange={quantityHandler}
          defaultValue="1"
          min="1"
        />
        <button type="button" onClick={props.onDelete}>
          <MinusSquareOutlined />
        </button>
      </div>
    </div>
  );
};

export default CartItem;