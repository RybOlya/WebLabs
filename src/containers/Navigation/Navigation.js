import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styles";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import { StyledHeader } from "./Navigation.styles";

import { IconsWrapper, IconBase } from "../../components/Icon/Icon.styled";

import {
  SearchOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

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
              <NavLink exact to="/services" activeClassName="selected">
                services
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="selected">
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <IconsWrapper>
            <IconBase component={SearchOutlined} color="#b89367" />
            <IconBase component={ShoppingOutlined} color="#6a3e19" />
          </IconsWrapper>
        </div>
      </StyledHeader>
      <Switch>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/services">
          <div>Hello it is blog</div>
        </Route>
        <Route path="/contact">
          <div>Hello it is contact</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </LinkingWrapper>
  </Router>
);

export default Navigation;
