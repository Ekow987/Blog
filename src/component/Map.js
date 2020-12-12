 import React from 'react';
import Card from  'react-bootstrap/Card';
import { Theme } from './ThemeProvider';
import {useState,useContext} from 'react';
import Second_img from '../img/baba.jpg';
import Button from  'react-bootstrap/Button';
import Form  from  'react-bootstrap/Form';
import Alert  from  'react-bootstrap/Alert';
import Navbar from './Navigation';





function Movies() {
  
    const currentTheme = useContext(Theme)[0];
    const [show, setShow] = useState(true);
    return (
        <div className={ `bg-${currentTheme}` }>
          
            <Navbar/>
                    <Card>
<Card.Img variant="top" src={Second_img } />
    <Card.Body>
      <Card.Text>
     
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  
 

  <Form className="move">
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>TYPE COMMENT HERE</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
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

  <Alert show={show} variant="success" >
        <Alert.Heading>OPPS!</Alert.Heading>
        <p>
          YOUR COMMENT HAS BEEN SAVED ENJOY
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success" >
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button className="but" onClick={() => setShow(true)}>Save Comment</Button>}
    
</Form>

  





 
        </div>
    )
}


export default Movies;
