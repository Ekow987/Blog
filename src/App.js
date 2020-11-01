import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Newpost from './component/Newpost';
import Navbar from './component/Navigation';
import './component/bootstrap.min.css';
import Readmore from './component/Readmore';




const Routes=()=>{
    return(
    <BrowserRouter>
    <Navbar/>
          <Switch>
       <Route exact path="/">
       <Home/>
       
       </Route>
      
       <Route exact path="/Login">
       <Login/>
       </Route>
       <Route exact path="/Newpost">
       <Newpost/>
       </Route>
       <Route exact path="/Readmore">
       <Readmore/>
       </Route>
      
      </Switch>
    
    </BrowserRouter>
    );
  }



function App() {
  
  return (
    <div className="App" >
     <Routes/>
     
    
      
    </div>
  );
}

export default App;
