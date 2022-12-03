import styled from "styled-components";
import { Button, Layout, } from "antd";
const { Header, Footer, Sider, Content } = Layout;
export const SectionWrapper = styled.div`
  display: flex;
  background-image: url("https://symmetry.com.ua/projects/images/2021_Kovalska/render_3.jpg");
  height: 700px;
  background-size: cover;
  justify-content: space-between;
  padding: 0 200px;
`;

export const ItemWrapper = styled.div`
  display:flex;
  padding: 24px 50px;
  width: 100%;
  justify-content: space-evenly;
`;
export const CartButton = styled.div`
  display:flex; 
  justify-items: space-evenly;
`;
export const ItemImage = styled.div`
align-self: center;
  width : 80%;
`;
export const SelectBox = styled.div`
  align-items: center;
  height: 100px;
`;
export const ItemInfo = styled.div`

`;
export const StyledButton = styled(Button)`
  font-weight: 500;
  border-radius: 4px;
  border-color: #6a3e19;
  color: white;
  padding: 5px 15px;
  margin:0 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;
export const CategoryRow = styled.div`
  display: inline-block;
  justify-content: space-around;
  width: 45%;
  margin: 30px 30px;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 700px;
  justify-content: space-between;
`;
