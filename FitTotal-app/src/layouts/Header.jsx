import { AppBar, Container, Toolbar, Box, TextField, InputAdornment, Button, Stack, useTheme, useMediaQuery } from '@mui/material'
import Logo from '../assets/mstile-150x150.png';
import SearchIcon from '@mui/icons-material/Search'
import { Link } from "react-router-dom"

function Header() {
  const theme = useTheme()
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <AppBar position='static' elevation={1} sx={{ backgroundColor: "primary.main", height: "15vh", padding:0,  }}>
      <Container maxWidth={"xl"}>
        <Toolbar sx={{ 
            display:"flex", justifyContent:"space-between",
            alignItems:'flex-start',
            marginTop:'20px'
            }}
        >
          <Link to={"/"}>
            <Box component="img"
              src={Logo}
              alt='logo da FitTotal'
              sx={{ 
                  marginTop: "-90px" ,
                  marginLeft: "-90px" }}>
            </Box>
          </Link>
          {/* Não mostrar o elemento na tela so se for menos d md*/}
          { isUpMd && (
            <Stack direction={"row"} spacing={2} width={600} height={55}>
            <TextField
              fullWidth
              id="input-search"
              placeholder='Pesquisar produto'
              sx={{ 
                backgroundColor:"#73777b", 
                borderRadius: "10px",
            }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' sx={{ color: 'primary.light' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant='outlined'
            />
            <Button variant='contained' 
            sx={{ 
                fontWeight:"bolder",
                width:"150px",
                color: 'primary.light',
                backgroundColor:'secondary.light' }}>
                  Pesquisar
            </Button>
            </Stack>
          ) }
          
          
            <Button
                variant='contained'
                size={ isUpMd ? 'large' : "small"}
                sx={{ color: 'secondary.light', backgroundColor:'primary.dark', height:50, fontWeight:"bolder"  }}>
                Entrar no sistema
            </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header
