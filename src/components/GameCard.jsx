import React from 'react';

const GameCard = ({ game, backgroundImage }) => {
  const firstGame = game[0];
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <li className="card" style={cardStyle}>
      <div>
        <img src={game.image_url} alt={game.name} />
      </div>
      <h4>{game.name}</h4>
      <p>Price: {game.price}</p>
      {game.onDisplay ? (
        <button className="primary">On Display</button>
      ) : (
        <button>Out of Display</button>
      )}
    </li>
  );
};

export default GameCard;
