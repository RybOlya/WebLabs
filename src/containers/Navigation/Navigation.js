import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";
import { Row, Col } from "antd";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import { StyledHeader } from "./Navigation.styled";
import Cart from "components/Cart/Cart";
import { IconsWrapper, IconBase } from "../../components/Icon/Icon.styled";
import { useSelector } from "react-redux";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import ItemPage from "containers/ItemPage/ItemPage";

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.totalQuantity);
  return (
    <Router>
      <LinkingWrapper>
        <StyledHeader title="Dwello">
          <div>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  <IconsWrapper>
                    <IconBase component={HomeOutlined} color="#323747" />
                    <div>dwello</div>
                  </IconsWrapper>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/catalog" activeClassName="selected">
                  catalog
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/cart" activeClassName="selected">
                  cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <IconsWrapper>
              <NavLink exact to="/cart" activeClassName="selected">
                <Row style={{ width: "40px", marginRight:"50px" }}>
                  <Col
                    span={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p style={{ align: "center" , color: "#6a3e19"}} className="navbar-count">
                      {cartQuantity}
                    </p>
                  </Col>
                  <Col span={12} >
                    <IconBase component={ShoppingOutlined} color="#6a3e19" />
                  </Col>
                </Row>
              </NavLink>
            </IconsWrapper>
          </div>
        </StyledHeader>
        <Switch>
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route path="/catalog/:productHref">
            <ItemPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </LinkingWrapper>
    </Router>
  );
};

export default Navigation;
