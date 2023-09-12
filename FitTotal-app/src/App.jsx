import './style/App.css'
import Header from './components/Header'
import CardCategories from './components/Card'
import { useEffect, useState } from 'react'
import { Grid, Typography, Container } from '@mui/material'



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
      <Header query={query} setQuery={setQuery} />

      <Container maxWidth={"xl"} sx={{mt:4}}>
        <Typography variant='h4' color={"#3b4046"}>Produtos FitTotal - Categorias</Typography>

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
