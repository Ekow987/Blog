import React,{useState,useContext}from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { Theme } from './ThemeProvider';


function Login() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[login,setLogin]=useState(false);
    const currentTheme = useContext(Theme)[0];
    

    const handleInputEmail=(event)=>{
        setEmail (event.target.value)
    }
    const handleInputPassword=(event)=>{
        setPassword (event.target.value)
    }
    const handleLogin=(event)=>{
        event.preventDefault();
        if (email=="ansahalbert029@gmail,com" && password=="12345") {
            setLogin(true)
        }

    }
   
    
    return (
        <div className={ `bg-${currentTheme}` }>
         <h3 id="do">Please Login here</h3>
         <Form onSubmit={Login} className="form">
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
  <Button className="bat"variant="primary" type="Login" onClick={handleLogin}   >
    Login
  </Button>
</Form>
 
        </div>
            )
}

export default Login;
