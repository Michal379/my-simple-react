import React, {useState, useEffect} from 'react';
import GameCard from './GameCard';

const Games = () => {
  const [data, setData] = useState([])

useEffect(() => {
  fetch("http://localhost:9292/games")
  .then((r) => r.json())
  .then((data) =>setData(data))
  .catch((error) => console.log(error))
}, [])
console.log(data);
  return (
    <ul className='cards'>
      {data.map((game)=>(
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  )
}

export default Games