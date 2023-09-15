import React, { useEffect, useState } from "react"; // Import React
import { Grid, Stack, Typography } from "@mui/material";
import CardProduct from "../components/CardProduct";
import { useParams } from "react-router-dom";
import products from "./../data/products";

function Products() {
  const { categories } = useParams();
  const [productData, setProductData] = useState([]); // Use "useState" instead of "{ productData, setProductData }"

  useEffect(() => {
    const filterArray = products.filter((item) => item.category === categories);
    setProductData(filterArray);
  }, [categories]);

  return (
    <>
      <Stack spacing={1}>
        <Typography variant="h2" color={"primary"}>
          {categories}
        </Typography>
        <Typography variant="h5" color={"primary"}>
          {productData.length} produtos encontrados {/* Display the number of products */}
        </Typography>
      </Stack>
      <Grid container spacing={2} mt={5}
      >
        {productData.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} mb={4} key={index}>
            <CardProduct item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
