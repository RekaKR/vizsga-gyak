import React, { useState, useEffect } from 'react';
import LoadingMask from './components/LoadingMask/LoadingMask';
import Hotel from './components/Hotel/Hotel';
import './App.css'

const App = () => {
  const [data, setData] = useState([]);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setIsShow(false)

    fetch('./api/hotels')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setData(null))
      .finally(() => setIsShow(true))
  }, [])

  return (
    <div className="App">
      <h1>Hotels</h1>

      {
        !isShow
          ? <LoadingMask />
          : data.map(item => <Hotel key={item.id} item={item} />)
      }
    </div>
  )
}

export default App
