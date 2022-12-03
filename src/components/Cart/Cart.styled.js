import styled from "styled-components";
export const CartStyled = styled.div`
  .cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 1% 5%;
    margin: 2% 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .cart-container {

    align-items: center;
  }
  .cart-image {
    width: 20%;
    border: 1px solid black;
    border-radius: 5px;
  }

  .cart-changes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart-changes button,
  input {
    width: 30px;
  }

  .cart-changes input {
    margin-bottom: 30px;
  }
  h3 
  {
    text-align: right;
    margin: 30px 70px;
  }
`;
export const CartImage = styled.div`
  align-self: center;
  width: 20%;
`;
