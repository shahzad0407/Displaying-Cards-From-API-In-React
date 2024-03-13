import { useState,useEffect } from 'react'
import './App.css'
import Cards from './Cards.jsx'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
  }
  
  
  useEffect(() => {
    fetchData()
  }, [])

  // cards.map((item) => {
  //   console.log(item);
  // });

  function displayCards(){
    return cards.map((item) => {
      console.log(item.userId)
      return <Cards key={item.id} userId={item.userId} id={item.id} title={item.title} body={item.body}/>
    });
  }

  return (
    <div className='container bg-orange-600 text-white gap-5'>
    {displayCards()}
    </div>
  )
}

export default App
