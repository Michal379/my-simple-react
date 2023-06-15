import React from 'react'

const GameCard = ({game}) => {
  return (
    <li className='card'>
      <img src={game.image} alt={game.name} />
      <h4>{game.name}</h4>
      <p>Price: {game.price}</p>
      {/* {game.onDisplay ? (
        <button className='primary'>On Display</button>) : (
          <button>Out of Display</button>
        )} */}
    </li>
  )
}

export default GameCard