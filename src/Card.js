import React from "react";
import './App.css'
import {useState } from 'react'

const Card = ({resultItem, del,setData})=>{ 
  const [id, setid] = useState(null)
  const [inputData, setInputData] = useState(null)
  
  const edit = (index)=>{
    setInputData(resultItem[index]);
    setid(index)
  }
  const save = (index)=>{
    let arr = [...resultItem];
    arr[id] = inputData;
    setData(arr);
    setid(null)
    setInputData(null);
  }
  
  return<div className="container">
    {resultItem && resultItem.map((item, index)=>{
    return(
        <div key={item.id} className="sub">
          {id!== index && <div>
              <div>Sr.No: {item.id}</div>
              <div>Name: {item.name}</div>
              <div>Username: {item.username}</div>
              <div>Email: {item.email}</div>
            </div>}
          {id=== index && inputData &&<div>
              <div>Name: <input  type="text" value={inputData.name} onChange={(e)=>setInputData({...inputData,name:e.target.value})}></input></div>
              <div>Username: <input  type="text" value={inputData.username} onChange={(e)=>setInputData({...inputData,username:e.target.value})}></input></div>
              <div>Email: <input  type="text" value={inputData.email} onChange={(e)=>setInputData({...inputData,email:e.target.value})}></input></div>
            </div>}
            <div className="btndiv">
              <div><button onClick={()=>del(item.id)}>Delete</button></div>
              { id !== index && <div><button onClick={()=>edit(index)}>Edit</button></div>}
              { id === index && <div><button onClick={()=>save(index)}>Save</button></div>}
            </div>
        </div>
    )
    })}
  </div>
}
export default Card;