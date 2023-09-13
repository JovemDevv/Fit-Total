import { Typography, Card, Stack, Box, IconButton  } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


// eslint-disable-next-line react/prop-types
function CardCategories({ title }) {
  
  return (
    <Card 
      variant="outlined" 
      sx={{
        backgroundColor: "#3b4046", 
        height: "200px",
        p: 4,
        borderRadius: 3,
      }}> 

      <Stack direction={"row"}
        alignItems={"center"} 
        justifyContent={"space-between"}
        sx={{ height: "100%" }}>
          <Stack direction={"column"}>
            <Typography variant="h4" color={"secondary.light"}>
              { title }
            </Typography>
            <Typography variant="body2" color={"secondary.main"}>
              10 produtos encontrados
              </Typography>
          </Stack>
          <Box sx={{
            height:"40px",
            width:"40px",
            backgroundColor:"secondary.main",
            borderRadius:2,}}>
              <IconButton sx={{color: "white"}}>
                <ArrowForwardIosIcon/>
              </IconButton>
            </Box>
        </Stack>
              
     </Card>
  );
}

export default CardCategories;
