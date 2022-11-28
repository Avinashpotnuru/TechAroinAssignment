
import './App.css';
import Counter from './Counter';
import Task3 from './Grid';

import {Route,Routes} from "react-router-dom"
import Task4 from './Task4';
import Navbar from './Navbar';


function App() {
  return (


    <>
    <div className='mainbg'>
    <Navbar/>
    
    <Routes>
    <Route exact path='/' element={<Counter/>}/>
      <Route exact path='/task3' element={<Task3/>}/>
      <Route exact path='/task4' element={<Task4/>}/>

    </Routes>

    </div>
    
     
    
    
  
    </>
   
      
      
   
  );
}

export default App;
