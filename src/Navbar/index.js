import {Link} from "react-router-dom"
import "./index.css"
const Navbar=()=>{
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <Link to="/"> <li>TASK1&TASK2</li></Link>
                    <Link to="/task3"> <li>TASK3</li></Link>
                   
                    <Link to="/task4"> <li >TASK4</li></Link>
                    
                   
                    


                </ul>
            </nav>
        </div>
    )
}

export default Navbar