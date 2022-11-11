import React, { useState, useEffect } from 'react';
import ImageDwelling1 from "../../../../Icons/render_1_kovalska_1.jpg";
import ImageDwelling2 from "../../../../Icons/render_1_konovaltsia.jpg";
import ImageDwelling3 from "../../../../Icons/1_dubai_1.jpg";
import ImageDwelling4 from "../../../../Icons/Yaroslavenka_23_1_1.jpg";
import { CardWrapper } from "../../../Catalog/Catalog.styled";
import CardItem from "../../../../components/CardItem/CardItem";
import { Col, Row } from "antd";
const apartments = [
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

const Apartment = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('title');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        title: 'title',
        price: 'price',
      };
      const sortProperty = types[type];
      const sorted = [...apartments].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 
  
  return (
    <div>
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="priceLow">Low-High</option>
        <option value="priceHigh">High-Low</option>
      </select>

      <CardWrapper>
        <Row justify="space-evenly">
          {data.map(
            ({ type, title, description, image, location, price }, idx) => (
              <Col style={{ padding: "8px 8px " }} flex={1}>
                <CardItem
                  type={type}
                  title={title}
                  description={description}
                  imageSrc={image}
                  location={location}
                  price={price}
                  id={idx}
                />
              </Col>
            )
          )}
        </Row>
      </CardWrapper>
    </div>
  );
};

export default Apartment;
