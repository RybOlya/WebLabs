import React from "react";
import ImageDwelling1 from "../../../../Icons/render_1_kovalska_1.jpg";
import ImageDwelling2 from "../../../../Icons/render_1_konovaltsia.jpg";
import ImageDwelling3 from "../../../../Icons/1_dubai_1.jpg";
import ImageDwelling4 from "../../../../Icons/Yaroslavenka_23_1_1.jpg";
import {CardWrapper}  from "../../../Catalog/Catalog.styled";
import CardItem from "../../../../components/CardItem/CardItem";
import { Col, Row } from "antd";

const retail = [
  {
    type: "Retail",
    title: "Residental High-rise",
    description:
      "The recreational nature of the area of ​​Konovaltsia and Gipsova Streets sets priorities for the maximum preservation of existing landscaping and the creation of new relevant landscape stories. ",
    location: "Kyjiv, Ukraine",
    image: ImageDwelling1,
    price: 2700,
  },
  {
    type: "Retail",
    title: "Dubai Wharf Residence",
    description:
      "Dubai Warf is a transcultural, dynamic quarter based on the principles of ecological, social and economic sustainable development. ",
    image: ImageDwelling3,
    location: "Dubai, UAE",
    price: 4000,
  },
  {
    type: "Retail",
    title: "Residental building on Yaroslavenka St.",
    description:
      "The new volume envelops the villa from the southern and eastern side, rises on the columns for better insolation of apartments and the release of the nearby space.  ",
    image: ImageDwelling4,
    location: "Lviv, Ukraine",
    price: 2500,
  },
  {
    type: "Retail",
    title: "Dubai Wharf Residence",
    description:
      "Dubai Warf is a transcultural, dynamic quarter based on the principles of ecological, social and economic sustainable development. ",
    image: ImageDwelling3,
    location: "Dubai, UAE",
    price: 4000,
  },

  {
    type: "Retail",
    title: "Dubai Wharf Residence",
    description:
      "Dubai Warf is a transcultural, dynamic quarter based on the principles of ecological, social and economic sustainable development. ",
    image: ImageDwelling3,
    location: "Dubai, UAE",
    price: 4000,
  },
  {
    type: "Retail",
    title: "Residental building on Yaroslavenka St.",
    description:
      "The new volume envelops the villa from the southern and eastern side, rises on the columns for better insolation of apartments and the release of the nearby space.  ",
    image: ImageDwelling4,
    location: "Lviv, Ukraine",
    price: 2500,
  },
  {
    type: "Retail",
    title: "Dubai Wharf Residence",
    description:
      "Dubai Warf is a transcultural, dynamic quarter based on the principles of ecological, social and economic sustainable development. ",
    image: ImageDwelling3,
    location: "Dubai, UAE",
    price: 4000,
  },
  {
    type: "Retail",
    title: "Residental building on Yaroslavenka St.",
    description:
      "The new volume envelops the villa from the southern and eastern side, rises on the columns for better insolation of apartments and the release of the nearby space.  ",
    image: ImageDwelling4,
    location: "Lviv, Ukraine",
    price: 2500,
  },
];
const Retail = () => {
  return (
    <div>
      <CardWrapper>
        <Row justify="space-evenly">
          {retail.map(
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

export default Retail;
