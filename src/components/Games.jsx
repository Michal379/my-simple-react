import React, {useState, useEffect} from 'react'

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
    <>
    </>
  )
}

export default Games