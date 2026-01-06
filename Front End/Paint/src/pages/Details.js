import React from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../data/data";

const Details = () => {
  const { productName } = useParams();
  const product = MenuList.find((item) => item.name.toLowerCase().replace(/\s/g, "-") === productName);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>description: {product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Details;
