import '../css/App.css';

function Card(props) {
  return (
          <div className='Card'>
             <img className='character-img' src={require(`../img/personaje-${props.imagen}.png`)} alt='personaje'/>
              <div className='text-container'>
                <h1> {props.name} </h1>
                <p>{props.description}</p>
              </div>
          </div>
  );
}

export default Card;
