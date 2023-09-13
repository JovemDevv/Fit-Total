import Header from './components/Header'
import CardCategories from './components/Card'
import { useEffect, useState } from 'react'
import { Grid, Typography, Container, Divider } from '@mui/material'



const categorias = ['Proteínas', 'Termogênicos', 'Roupas e acessórios']

function App() {

  const [clicked, setClicked] = useState(null) 
  const [query, setQuery] = useState("")
  const [categories, setCategories] = useState(categorias)

  useEffect(() =>{
    const filterArray = categorias.filter(item => 
      item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
      setCategories(filterArray)
  }, [query])
 
  return (
    <>
      <Header />
      <Divider />
      <Container maxWidth={"xl"} sx={{ mt:4 }}>
        <Typography variant='h1' color={"primary"}>Produtos FitTotal - Categorias
        </Typography>

        <Grid container spacing={2} mt={5}>
          
          {categories.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
              <CardCategories title={item} /> 
            </Grid>
            ))}
          
        </Grid>
      </Container>
    </>
  )
}

export default App
