import React, { useState } from "react";


const Createbook=({submitcreatebook})=>{

const [bookdata,setbookdata]=useState('')
const handleinput=(event)=>{

setbookdata(event.target.value)

}
const handlformsubmit=(event)=>{
    event.preventDefault();
    submitcreatebook(bookdata)
    setbookdata('')
}



return <div> 

create book
<form onSubmit={handlformsubmit}>
    Title: <input value={bookdata} onChange={handleinput} />
    <button >create !</button>
   
</form>

   
</div>
}
export default Createbook
