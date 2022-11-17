import styled from 'styled-components';
import { Button } from 'antd';
//import HeaderApart from "../../Icons/render_3_kovalska.jpg";
export const SectionWrapper = styled.div`
    display: flex;
    background-image: url("https://symmetry.com.ua/projects/images/2021_Kovalska/render_3.jpg");
    height: 700px;
    background-size: cover;
    justify-content: space-between;
    padding: 0 200px;
`;

export const StyledText = styled.div`
    margin-top: 200px;
    color: white;
    font-size: 25px;
    h1 {
        font-family: 'Saira Condensed', sans-serif;
        font-weight:600;
        font-size: 80px;
        color: white;
    }
`
export const StyledButton = styled(Button)`

    font-weight:500;
    background:#6a3e19;
    border-radius: 5px;
    border-color: 5px;
    color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`
export const CategoryRow = styled.div`
    display: inline-block;
    justify-content: space-around;
    width: 45%;
    margin: 30px 30px;
`
export const CategoryWrapper = styled.div`
display: flex;
align-items:center;
height: 700px;
justify-content: space-between;
`