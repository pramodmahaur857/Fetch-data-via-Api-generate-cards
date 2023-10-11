
import { useEffect,useState } from 'react'
import Card from "./Card"
import axios from "axios";
import './App.css'
const style = {
  backgroundColor:"black",
  color:"white",
  padding:"1% 2%",
  marginBottom:"10px",
  fontFamily:"Arial"
}
export default function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((rej)=>setData(rej.data))
  },[])

  const del = (ind)=>{
   const result = data.filter((item)=>{
      return item.id!==ind
    })
    setData(result)
  }
  
  return (
    <main>
        <div style={{...style}}>
          <h4 >Fetch data from API, generated cards and adding some functionality like delete or edit</h4>
        </div>
      <Card resultItem ={data} del={del}  setData={setData}/>
    </main>
  )
}
