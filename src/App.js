import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';

import './component/bootstrap.min.css';
import Map from './component/Map';
import Disease from './component/Disease';




const Routes=()=>{
    return(
    <BrowserRouter>
    
          <Switch>
       <Route exact path="/">
       <Home/>
       
       </Route>
      
       <Route exact path="/Login">
       <Login/>
       </Route>
       <Route exact path="/Disease">
       <Disease/>
       </Route>
       <Route exact path="/Map">
       <Map/>
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
