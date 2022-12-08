import logo from './logo.svg';
import React, { useState } from "react";
import Createbook from './Createbook';
import Listbook from './Listbook';
import './App.css';

function App() {

  const [books,setbook]=useState([])

  const createbook=(title)=>{
console.log('book needs to be created ',books)
const updatedbooks=[...books,
  {id:Math.round(Math.random()*9999),title},]
setbook(updatedbooks)
  }

  const deletebookbyid=(id)=>{
const bookstobedeleted=books.filter((item)=>{
  return item.id!==id
})
setbook(bookstobedeleted)
  }
const editbookonsave=(id,newbooktitle)=>{  //after editing book we get new title and on save of that editform call this function
const updatedtitle= books.map((item)=>{
  if(item.id===id){
   return {...books,title:newbooktitle,id}
  }
  return item
})
setbook(updatedtitle)
}

  return (
    <div className="App">
      <h2>BookApp</h2>
      <Createbook submitcreatebook={createbook}  />
      <Listbook bookslist={books} deletebook={deletebookbyid} oneditbbok={editbookonsave}/>
      
    </div>
  );
}

export default App;
