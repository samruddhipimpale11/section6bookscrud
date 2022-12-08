import React, { useState } from "react";
import Editbook from "./Editbook";



const Showbook=({showbooks,deletebook,Id,oneditbbok})=>{
const [showedit,setshowedit]=useState(false)

const submithandledelete=()=>{
    deletebook(Id)
    console.log('delete callefor id',Id)
}

const handleedit=()=>{
    setshowedit(!showedit)
}

const handlesubmit=(id,newtitle)=>{

    setshowedit(false) // after editing on save close the form 
    oneditbbok(id,newtitle)
}

let content=<h3>{showbooks}</h3>
if(showedit){                //logic for toggleling editform
    content= <Editbook showbooks={showbooks} Id={Id} onsubmit={handlesubmit} oneditbbok={oneditbbok}/>
}


    return(
        <div> {content}<button onClick={submithandledelete}>deletebook</button>
       <button onClick={handleedit}>Editbook</button>
        </div>
    )
}

export default Showbook