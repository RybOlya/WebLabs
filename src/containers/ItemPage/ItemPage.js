import React,{ useEffect, useState }from "react";
import { Link, useParams } from "react-router-dom";
import {
  ItemWrapper,
  ItemImage,
  ItemInfo,
  SelectBox,
  CartButton,
  StyledButton,
} from "./ItemPage.styled";
import {
  Divider,
  Row,
  Col,
  Tag,
  Layout,
  InputNumber,
} from "antd";

const { Content } = Layout;

const onChange = (value) => {
  console.log("changed", value);
};
function ItemPage() {
  const [dwelling, setDwelling] = useState();
  useEffect(() => {
    console.log("Fetching...");
    fetch('http://localhost:8000/api/dwelling/')
      .then((response) => response.json())
      .then((data) =>{
        console.log(data.dwelling)
        setDwelling(data.dwelling);
      });
  },[]);
  const { productHref } = useParams();
  const thisProduct = dwelling ? dwelling.find((prod) => prod.href === productHref) : [];

  return (
    <div>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={12} justify="space-around" align="middle">
          <ItemImage>
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                borderRadius: "10px",
              }}
              alt="example"
              src={thisProduct.imageSrc}
            />
          </ItemImage>
        </Col>
        <Col span={12}>
          <ItemInfo>
            <div>
              <Tag color="#6a3e19">{thisProduct.category}</Tag>
              <Tag color="#6a6755">{thisProduct.location}</Tag>
            </div>
            <h1 style={{ marginTop: "40px" }}>{thisProduct.title}</h1>
            <Content>
              <p style={{ width: "70%" }}>{thisProduct.description}</p>
            </Content>
            <Row style={{ width: "60%" }}>
              <Col span={12}>
                <SelectBox>
                  <p>Choose quantity</p>
                  <InputNumber
                    min={1}
                    max={4}
                    defaultValue={1}
                    onChange={onChange}
                  />
                </SelectBox>
              </Col>
              <Col span={12}>
                <SelectBox>
                  <p>Bedrooms</p>
                  <select
                    style={{ borderRadius: "5px", padding: "4px" }}
                    class="dwellings"
                    defaultValue={"One"}
                  >
                    <option value="One">One bedroom</option>
                    <option value="Two">Two bedrooms</option>
                  </select>
                </SelectBox>
              </Col>
            </Row>
          </ItemInfo>
        </Col>
      </Row>

      <Row>
        <ItemWrapper>
          <Col flex={8}>
            <h1>Price: ${thisProduct.price}/&#13217;</h1>
          </Col>
          <Col flex={2}>
            <CartButton>
              <Link to={`/catalog/`}>
                <StyledButton
                  style={{
                    borderColor: "#6a3e19",
                    backgroundColor: "white",
                    color: "#6a3e19",
                  }}
                >
                  Go Back
                </StyledButton>
              </Link>
              <StyledButton
                style={{
                  backgroundColor: "#6a3e19",
                  borderColor: "#6a3e19",
                  color: "white",
                }}
              >
                Add to cart
              </StyledButton>
            </CartButton>
          </Col>
        </ItemWrapper>
      </Row>
    </div>
  );
}

export default ItemPage;
