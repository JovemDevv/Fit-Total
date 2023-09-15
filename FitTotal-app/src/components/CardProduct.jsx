import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"

function CardProduct({item}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/product-detail/${item.id}`)
    }

    return (
        <Card 
        sx={{ 
            maxWidth: 345,
            height: "100%",
            backgroundColor: "secondary.main",
             }}>
            <CardMedia
                sx={{ height:160 }}
                image={item.image}
                title="proteins photo" 
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="primary">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="primary">
                    {item.description}
                </Typography>
                <Typography gutterBottom variant="h4" component="div" color="primary">
                   R$ {item.price}
                </Typography>
            </CardContent>
            <CardActions sx={{ p:2 }}>
                <Button onClick={handleClick} variant="contained" size="small">
                    Ver produto
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardProduct