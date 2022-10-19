import React, { useState, useEffect } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';

import {
  FilterOptions,
} from "./Catalog.styled";
import { Radio } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Apartment from "./Filtered/Apartment/Apartment";
import Cottage from "./Filtered/Cottage/Cottage";
import House from "./Filtered/House/House";
import Retail from "./Filtered/Retail/Retail";

const Catalog = () => {
  return (
    <div>
      <Router>
        <FilterOptions>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <NavLink exact to="/apartment" activeClassName="selected">
              <Radio.Button value="a">Apartments</Radio.Button>
            </NavLink>

            <NavLink exact to="/cottage" activeClassName="selected">
              <Radio.Button value="b">Cottages </Radio.Button>
            </NavLink>

            <NavLink exact to="/house" activeClassName="selected">
              <Radio.Button value="c">Houses</Radio.Button>
            </NavLink>

            <NavLink exact to="/retail" activeClassName="selected">
              <Radio.Button value="d">Retail</Radio.Button>
            </NavLink>
          </Radio.Group>
        </FilterOptions>
        <Switch>
          <Route path="/apartment">
            <Apartment />
          </Route>
          <Route path="/cottage">
            <Cottage />
          </Route>
          <Route path="/house">
            <House />
          </Route>
          <Route path="/retail">
            <Retail />
          </Route>
          <Route path="/">
            <Apartment />
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default Catalog;
