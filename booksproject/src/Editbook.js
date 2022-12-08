import React, { useState } from "react";



const Editbook=({Id,showbooks,onsubmit,oneditbbok})=>{
const [newtitle,setnewtitle]=useState(showbooks)


const handleonsubmit=(event)=>{
    event.preventDefault();
   // oneditbbok(Id,newtitle)
    onsubmit(Id,newtitle);
   console.log('new title is',newtitle)
}
    return(
        <div> <h2>editor</h2>
 <form onSubmit={handleonsubmit}>
<input value={newtitle} onChange={(event)=>setnewtitle(event.target.value)}/>
<button>save</button>

 </form>
        </div>
    )
}

export default Editbook