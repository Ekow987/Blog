import React from 'react';
import Navbar from './Navigation';
import Table2 from './Table2';


function Pest(props) {

    const {img} =props
    return (
        <div>
             <Navbar/>
             
           <img src={img} className="bet" alt=""></img> 
          <Table2/>
        </div>
    )
}

export default Pest;
