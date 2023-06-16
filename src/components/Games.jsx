import React, { useState, useEffect } from 'react';
import Header from './Header';
import GameCard from './GameCard';
import NewGame from './NewGame';
import '../App.css'

const Games = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/games')
      .then((r) => r.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const background_jewel_url = "https://i.pinimg.com/564x/18/0d/ff/180dffaa23dd263c714ba4a03d7f6b34.jpg";
  
  const handleAddGame = (newGame) => {
    const formData = new FormData();
    formData.append('name', newGame.name);
    formData.append('price', newGame.price);
    formData.append('image', newGame.image);
  
    fetch('http://localhost:9292/games', {
      method: 'POST',
      body: formData,
    })
      .then((r) => r.json())
      .then((createdGame) => {
        setData((prevGames) => [...prevGames, createdGame]);
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <>
      <Header />
      <NewGame onAddGame={handleAddGame} />
      <div className="card-container" style={{backgroundImage:`url(${background_jewel_url})`}} >
        {data.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </>
  );
};

export default Games;
