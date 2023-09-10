// eslint-disable-next-line react/prop-types
function Header({ query, setQuery}){

    function handleChange(event) {
        setQuery(event.target.value)
    }
    return(
        <header>
            <nav>
                <img src="/src/assets/mstile-150x150.png" />
                <div className='searchBar'>
                    <input 
                        type="text"
                        placeholder="Pesquisar produto"
                        value={query} 
                        onChange={(event) => handleChange(event)}
                        />
                    <button>Pesquisar</button>
                </div>
                <div className='buttonEntrar'>
                    <button>Entrar no sistema</button>
                </div>
            </nav>
      </header>
    )
    
}

export default Header