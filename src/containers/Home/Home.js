import React from "react";
import ImageDwelling1 from "../../Icons/render_1_kovalska_1.jpg";
import ImageDwelling2 from "../../Icons/render_1_konovaltsia.jpg";
import ImageDwelling3 from "../../Icons/1_dubai_1.jpg";
import ImageDwelling4 from "../../Icons/Yaroslavenka_23_1_1.jpg";

import CatalogApart from "../../Icons/render_1_karmanskoho.jpg"
import CatalogRetail from "../../Icons/retail_1.jpg"
import CatalogCottage from "../../Icons/render_2_konovaltsia.jpg"
import CatalogHouse from "../../Icons/Yaroslavenka_23a_1_1.jpg"
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CategoryRow,
  CardWrapper,
  CategoryWrapper,
} from "./Home.styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import CategoryItem from "../../components/Category/CategoryItem";

const data = [
  {
    type: "Apartment",
    title: "Residental High-rise",
    description:
      "The recreational nature of the area of ​​Konovaltsia and Gipsova Streets sets priorities for the maximum preservation of existing landscaping and the creation of new relevant landscape stories. ",
    location: "Kyjiv, Ukraine",
    image: ImageDwelling1,
    price: 2700,
  },
  {
    type: "Cottage",
    title: "Residental complex on Konovaltsia Street",
    description:
      "The building of the complex from Gipsova Street is formed by three volumes, connected by two entrance blocks - verandas, which contain stairs and elevators. ",
    image: ImageDwelling2,
    location: "Lviv, Ukraine",
    price: 2200,
  },
  {
    type: "Apartment",
    title: "Dubai Wharf Residence",
    description:
      "Dubai Warf is a transcultural, dynamic quarter based on the principles of ecological, social and economic sustainable development. ",
    image: ImageDwelling3,
    location: "Dubai, UAE",
    price: 4000,
  },
  {
    type: "Apartment",
    title: "Residental building on Yaroslavenka St.",
    description:
      "The new volume envelops the villa from the southern and eastern side, rises on the columns for better insolation of apartments and the release of the nearby space.  ",
    image: ImageDwelling4,
    location: "Lviv, Ukraine",
    price: 2500,
  },
];
const category1 = [
  {
    type: "Apartments",
    image: CatalogApart,
    width: "200px",
  },
  {
    type: "Retail",
    image: CatalogRetail,
    width: "300px",
  },
];
const category2 = [
  {
    type: "Cottages",
    image: CatalogCottage,
    width: "300px",
  },
  {
    type: "Houses",
    image: CatalogHouse,
    width: "43.75rem",
  },
];
const Home = () => {
  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Need an apartment?</h1>
          <p>Find homes to buy or rent and check house prices</p>
          <NavLink exact to="/catalog" activeClassName="selected">
            <StyledButton size="large">Explore</StyledButton>
          </NavLink>
        </StyledText>
      </SectionWrapper>
      
      <CategoryWrapper>
      <CategoryRow>
        {category1.map(({ type, image, width }, idx) => (
          <CategoryItem
            type={type}
            imageSrc={image}
            width = {width}
            id={idx}
          />
        ))}</CategoryRow>
        <CategoryRow>
        {category2.map(({ type, image, width }, idx) => (
          <CategoryItem
            type={type}
            imageSrc={image}
            width = {width}
            id={idx}
          />
        ))}</CategoryRow>
      </CategoryWrapper>
      <CardWrapper>
        {data.map(
          ({ type, title, description, location, image, price }, idx) => (
            <CardItem
              type={type}
              title={title}
              description={description}
              location={location}
              imageSrc={image}
              price={price}
              id={idx}
            />
          )
        )}
      </CardWrapper>
    </div>
  );
};

export default Home;
