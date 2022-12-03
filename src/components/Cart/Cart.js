import React from "react";
import { CartStyled } from "./Cart.styled";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../containers/store/index";
import CartItem from "../CartItem/CartItem";
import { StyledButton } from "containers/ItemPage/ItemPage.styled";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalAmount);

  const dispatch = useDispatch();
  const removeCartItemHandler = (href) => {
    dispatch(actions.removeItemFromCart(href));
  };
  return (
    <div>
      <CartStyled>
        <div class="cart-container">
          {cartItems.map((item) => (
            <CartItem
              key={item.href}
              href={item.href}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              imageSrc={item.imageSrc}
              onDelete={removeCartItemHandler.bind(null, item.href)}
            />
          ))}
        </div>

        <h3>Total amount: ${totalPrice}</h3>
        <div
          style={{
              display: "flex",
              justifyContent:"space-between",
          }}
        >
          <Link to={`/catalog/`}>
            <StyledButton
              style={{
                borderColor: "#6a3e19",
                backgroundColor: "white",
                color: "#6a3e19",
                margin: "50px 30px",
              }}
            >
              Back to Catalog
            </StyledButton>
          </Link>
          <Link to={`/checkout/`}>
            <StyledButton
              style={{
                backgroundColor: "#6a3e19",
                borderColor: "#6a3e19",
                color: "white",
                margin: "50px 30px",
              }}
            >
              Continue
            </StyledButton>
          </Link>
        </div>
      </CartStyled>
    </div>
  );
};

export default Cart;
