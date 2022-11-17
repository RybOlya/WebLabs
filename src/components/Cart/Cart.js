import React from "react";
//import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../containers/store/index";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalAmount);

  const dispatch = useDispatch();
  const removeCartItemHandler = (id) => {
    dispatch(actions.removeItemFromCart(id));
  };
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageSrc={item.imageSrc}
          onDelete={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
      <h3>{totalPrice}</h3>
    </div>
  );
};

export default Cart;
