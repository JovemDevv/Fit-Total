import { useParams } from "react-router-dom"
import { useState, useEffect, Fragment } from "react"
import products from "../data/products"
import { Grid, Stack, Typography, IconButton, Box } from "@mui/material"

function ProductDetail() {
    const {id}= useParams()
        const [productData, setProductData] = useState()

    useEffect(() => {
        const filterProduct = products.find((item) => item.id === parseInt(id))
        setProductData(filterProduct)
    }, [id])

    return (
        <Grid container>
            <Grid item sm={7}>
                <Grid container>
                    <Grid item sm={2}>
                        {productData?.listImages.map((item, index) => (
                            <Box key={index} sx={{width:"100%", heigth:"auto"}}>
                                <img 
                                src={item} 
                                alt={"imagem do produto"} 
                                height={"auto"} 
                                width={"100%"} 
                                style={{borderRadius:"20px", overflow:"hidden", }}
                                />
                            </Box>
                        ))}
                    </Grid>
                    <Grid item sm={10}>
                        <IconButton sx={{width:"100%", heigth:"auto"}}>
                                <img 
                                src={productData?.listImages[0]} 
                                alt={productData?.title}
                                height={"auto"}
                                width={"100%"}
                                style={{borderRadius:"20px", overflow:"hidden",
                                marginLeft:"20px"}}
                                />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={5}>
                <Stack>
                <Typography gutterBottom variant="h4" component="div" color="primary">
                    {productData?.title}
                </Typography>
                <Typography variant="body2" color="primary">
                    {productData?.description}
                </Typography>
                <Typography gutterBottom variant="h4" component="div" color="primary">
                   R$ {productData?.price}
                </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ProductDetail