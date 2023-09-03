import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
 
function App(){
  // return(
  //   <Login/>
  // )
        return(
                <Router>
                    <div className='App'>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                    </div>
                </Router>
        )
}
 
export default App;