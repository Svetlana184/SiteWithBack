import styles from './App.module.scss'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/api/main')
    .then(response => { 
      setdata(response.data)
    })
    .catch(error => { 
      console.error("Error",error)
    })
  }, [])

  const onDelete = async(itemId) => {
    try{
      await axios.delete(`http://localhost:3001/api/delete/${itemId}`);
      setdata(prev => prev.filter(item => item.id !== Number(itemId)));
      
    }
    catch(error) {
      console.log(`error: ${error.response?.status} ${error.responce?.data}`)
    }
  }

  return (
    <>
    <div>
        {data.map((index)=>(
          <div key={index.id}> 
              <ul className={styles.list_product}>
                <li>{index.id}</li>
                <li>Название продукта: {index.name}</li>
                <li>Номер бренда продукта: {index.name_id}</li>
              </ul>
              <button onClick={() => onDelete(index.id)}>Удалить</button>
          </div>
        ))}
    </div>
    </>
  )
}

export default App;
