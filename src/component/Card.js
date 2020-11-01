import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import First_img from '../img/im1.jpg';
import Second_img from '../img/im2.jpg';
import Nine_img from '../img/im4.jpg';



function Body() {
    return (
        <div>
           <CardGroup className="cone">
  <Card>
    <Card.Img variant="top" src={First_img} />
    <Card.Body>
      <Card.Title>Classic Film Shot in unique location</Card.Title>
      <Card.Text>
      Moviemaking is magic, and a legendary location adds a sprinkle of stardust. 
       From sunset resorts to cities in disguise, have your popcorn at the ready for our round-up of five fabulous films that utilised some of the most unique and unexpected filming locations in the world.    
       <p><Link to="/Readmore">[Read More]</Link></p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Second_img} />
    <Card.Body>
      <Card.Title>Poker Strategies from Movies: From James Bond to Mike McDermott</Card.Title>
      <Card.Text>
      An ancient artifact transfers the soul of a serial killer into the body of a teenage girl and vice versa.  With so many body swap movies out in the universe you could say this premise is a bit overdone. 
       But based on this trailer, freaky looks like a hell of {' '}
       <p><Link to="/Readmore">[Read More]</Link></p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Nine_img} />
    <Card.Body>
      <Card.Title>Want 26% More Guardians of the Galaxy Vol 2? Look here</Card.Title>
      <Card.Text>
      Those of us that love the large screen format and immersive environment are constantly scouring for details on special theatrical releases that compliment our viewing preference. 
      Well, the fine folks over at Marvel and IMAX have shared with us the details for the special version of Guardians of the Galaxy 
      <p><Link to="/Readmore">[Read More]</Link></p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> 
        </div>
    )
}

export default Body;
