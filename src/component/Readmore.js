import React from 'react';
import First_img from '../img/mov8.png';
import Button from  'react-bootstrap/Button';
import {useState,useContext}from 'react';
import { Theme } from './ThemeProvider';



function Readmore() {
    const[count,Setcount]= useState(20);
    const[dislike,Setdislike]= useState(20);
    const currentTheme = useContext(Theme)[0];
    
    return (
        <div className={ `bg-${currentTheme}` }>
            <img src={First_img} className="ima"></img>
        <p>The pure action film – the oeuvres of Schwarzenegger, Van Damme, Segal, Norris, Lundgren and the like, which use the nuts and bolts of thrillers to launch their enormous stars into a series of even bigger explosions – only really got going in the West in the early Eighties, after Hollywood had had its eyes opened to the majesty of the martial arts films coming out of Hong Kong and Japan.

Dr No was an early pointer too: Hitchcock's heroes tended to be resourceful and quick-witted, but the vogue for one who can think, blast or shag their way out of any tricky situation started with James Bond, and the Swiss-army-protagonist is still an action movie essential. There's an odd circularity to how big-budget action films now exist mainly in the superhero film vortex, with protagonists who are the logical extreme of that improbably handy secret agent.

Certainly, we've not lost our appetite for watching people smash seven shades out of each other while searching for some McGuffin or other. Here are the best action films ever.</p>
        
<p id="al">Likes {count}</p>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl" onClick={()=>Setcount(count + 1)}>
    Like
  </Button>
  <p id="al">DisLikes {dislike}</p>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl" onClick={()=>Setdislike(dislike - 1)}>
    DisLike
  </Button>
 
           </div>
       )
   }
   
   export default Readmore;
