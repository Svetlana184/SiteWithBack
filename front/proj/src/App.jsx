import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { response } from 'express';

function App() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/main')
    .then(response => { 
      setdata(response.data)
    })
    .catch(error => { 
      console.error("Error",error)
    })
  }, [])

  return (
    <>

    <div>
        {data.map((index)=>(
          <div key={index}> 
              <ul>
                <li>{index.id}</li>
                <li>{index.name}</li>
              </ul>
          </div>
        ))}
    </div>
    </>
  )
}

export default App
