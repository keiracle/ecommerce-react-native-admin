import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { ProductsContext } from "../../context/productsProvider";
import Product from "./Product";

const ProductContainer = props => {
  const { products } = useContext(ProductsContext);

  console.log(products);

  return (
    <View>
      {products.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default ProductContainer;
