import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'; // Adjust the path accordingly
//import Breadcrum from '../Components/Breadcrum/Breadcrum'; // Adjust the path accordingly
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* <Breadcrum product={product} /> */}
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
