import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Doc from '../img/drone404.jpg';









function Login() {


    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[login,setLogin]=useState(true);
    

    
    

    const handleInputEmail=(event)=>{
        setEmail (event.target.value)
    }
    const handleInputPassword=(event)=>{
        setPassword (event.target.value)
    }
    const handleLogin=(event)=>{
        event.preventDefault();
        if (email==="") {
            setLogin("")
        }

    }
    return (
        
            
           <div className="mama"> 
             <Card>
<Card.Img variant="top" src={Doc }  id="koko"/>
    <Card.Body>
      <Card.Text>
     TECNOFARMERS
      </Card.Text>
    </Card.Body>
  </Card>
             <h3 id="do">Please Login here</h3>
         <Form onSubmit={login} className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="lab">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email}  onChange={handleInputEmail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="lab">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={handleInputPassword} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={ handleLogin}>
   <Link to="/" id="so">Login</Link>
  </Button>

</Form>

        </div>
       
    )
}

export default Login;
