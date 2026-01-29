import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { response } from 'express';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('localhost:3001/api/main')
    .then(response => {
      setData(response.data)
    }).catch(error => {
      console.log("error" + error)
    });
  })


  return (
    <>
      <div>
        {data.map((index)=>{
          <div key={index}>
              <ul>
                <li>{index.title}</li>
                <li>{index.price}</li>
                <li>{index.date}</li>
              </ul>
          </div>
        })}
      </div>
    </>
  )
}

export default App
