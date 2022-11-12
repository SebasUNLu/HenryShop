import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAllProducts } from "../redux/slices/ProductSlice/productActions";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const Products = useAppSelector((state) => state.products.productList);
  const filters = useAppSelector((state) => state.filterState.filters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProducts(null, filters));
  }, []);
  return (
    <div className="flex flex-col  items-center mt-4">
      {Products &&
        Products.map((producto) => {
          return <ProductCard product={producto} />;
        })}
    </div>
  );
};

export default ProductCards;
