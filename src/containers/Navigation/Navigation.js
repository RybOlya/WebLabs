import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";

import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import { StyledHeader } from "./Navigation.styled";

import { IconsWrapper, IconBase } from "../../components/Icon/Icon.styled";

import {
  SearchOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import ItemPage from "containers/ItemPage/ItemPage";

const Navigation = () => (
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
            <IconBase component={ShoppingOutlined} color="#6a3e19" />
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
          <div>Hello it is cart</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </LinkingWrapper>
  </Router>
);

export default Navigation;
