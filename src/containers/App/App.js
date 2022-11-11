import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
import { BackTop } from "antd";
import { IconBase } from "../../components/Icon/Icon.styled";

import { UpOutlined } from "@ant-design/icons";

const App = () => {
  return (
    <div>
      <Navigation />
      <BackTop>
        <IconBase
          component={UpOutlined}
          color="#323747"
          style={{
            backgroundColor: `white`,
            borderRadius: "50%",
            border: "10px solid white",
          }}
        />
      </BackTop>
      <Footer />
    </div>
  );
};

export default App;
