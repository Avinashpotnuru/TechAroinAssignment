import { useState } from "react"
import "./index.css"

import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

const Counter=()=>{
    const [count,setCount]=useState(0)

    return(
        <div  className="bg">
            <h1 className="hea">Counter</h1>
            <div className="card">
            <span onClick={()=>setCount(prev=>prev-3)}><AiOutlineMinus/></span>
            <h1>{count}</h1>
            <span onClick={()=>setCount(prev=>prev+3)}><BsPlusLg/></span>
            
           

            </div>
           
        </div>
    )

}
export default Counter