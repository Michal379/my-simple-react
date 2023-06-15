import React, { useState, useEffect } from 'react';
import Header from './Header';
import GameCard from './GameCard';

const Games = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/games')
      .then((r) => r.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const background_jewel_url = "https://i.pinimg.com/564x/18/0d/ff/180dffaa23dd263c714ba4a03d7f6b34.jpg";

  return (
    <>
      <Header />
      <ul className="cards">
        {data.map((game) => (
          <GameCard key={game.id} game={game} backgroundImage={background_jewel_url} />
        ))}
      </ul>
    </>
  );
};

export default Games;