import React from 'react';
import Dis from '../img/be.jpg';
import Table from './Table';
import Navbar from './Navigation';
function Disease() {
    return (
        <div>
          <Navbar/>
           <img src={Dis} className="dis" alt=""></img> 
           <Table/>
        </div>
       

    )
}

export default Disease;
