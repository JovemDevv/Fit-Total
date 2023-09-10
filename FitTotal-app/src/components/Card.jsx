// eslint-disable-next-line react/prop-types
function Card({ title, index, setClicked }) {
  function handleClick() {
    setClicked(index);
  }

  return (
    <div className='card'>
      <div className='cardContent'>
        <div className='textContent'>
          <h3>{title}</h3>
          <p>10 produtos encontrados</p>
        </div>
        <div className='buttonIn'>
          <button onClick={handleClick}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
