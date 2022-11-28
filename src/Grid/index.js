 import { useEffect,useState } from "react"
 import "./index.css"
 const Task3=()=>{
    const [fetchData,getData]=useState([])
    const getingDataBackend=async()=>{
        const response=await fetch("https://gorest.co.in/public/v1/todos")
        const data=await response.json()
        console.log(data.data)
        getData(data.data)
    }


    useEffect(()=>{
        getingDataBackend()

    },[])
    return(
        <div className="task3" >
            <ul>
                {fetchData.map(item=>(
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                    </li>

                ))}
            </ul>

        </div>
    )

 }

 export default Task3