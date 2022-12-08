import React, { useState } from "react";
import Showbook from "./Showbook";


const Listbook=({bookslist,deletebook,oneditbbok})=>{

    return(
        <div>Displaying book:
        {
            bookslist.map((item,index)=>{
                return <div><Showbook deletebook={deletebook} showbooks={item.title} Id={item.id} oneditbbok={oneditbbok}/ >{console.log('checking',item.id)}</div>
            })
        }
        </div>
    )
}

export default Listbook