import './style/App.css'
import Header from './components/Header'
import Card from './components/Card'
import { Fragment, useEffect, useState } from 'react'
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
      <main>
        <div className='container'>
          <div className='text'>
            <h1>Produtos Fit Total - Categorias</h1>
          </div>
          <div className='cards'>
            {categories.map((item, index) => (
              <Fragment key={index}>
                <Card title={item} index={index} setClicked={setClicked} /> 
              </Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
