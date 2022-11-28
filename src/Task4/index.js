import { useEffect,useState } from "react"
 
import "./index.css"

const Task4=()=>{
    const [data,setData]=useState({"email":"","message":"","name":""})

    const {email,message,name}=data

    const handler=(e)=>{

        setData({...data,[e.target.name]:e.target.value})
    }

    const fetchDataHandler=(e)=>{
        e.preventDefault()
        console.log(data)
    }
    useEffect(()=>{
        let options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                Authorization:"Bearer Access-Token"

            },
            body:JSON.stringify(data)
        };
        fetch("https://admin.srkprojects.com/web/api/client/v1/contact-us/",options)
        .then((response)=>{
            return response.json()
        }).then(data=>console.log(data))
              


    },[])





    return(
        <div className="task4">
            <form onSubmit={fetchDataHandler}  >
                <h3>Email</h3>
                <input onChange={handler} type="email" name="email" value={email}  placeholder="enter your Email"/>
                <h3>Message</h3>
                <textarea  onChange={handler}  rows="4" name="message" value={message} placeholder="enter your message">

                </textarea>
                <br/>
                <h3>name</h3>
                <input  onChange={handler}  name="name" type="text" value={name} placeholder="enter your name"/>
                <br/>
                <button type="submit">Submit</button>


                
            </form>

        </div>
        
    )
}

export default Task4