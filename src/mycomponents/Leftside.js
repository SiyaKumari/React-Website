import React from 'react'
import {Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




const Leftside = () => {
    return (
        
        <div className = "loginpage">
        
        <h1 style = {{fontSize : "29px" , textAlign : "center"}}>Welcome !</h1>
         <p1 style = {{fontSize : "25px" , textAlign : "center"}}>Sign in to your account</p1>
            <Form style={{width:"75%", marginLeft:"15%", marginTop:"8%" }}>
                <Form.Group className = "mb-3">
                    <Form.Label style = {{fontSize : "18px" }}>Username</Form.Label>
                    <Form.Control style = {{fontSize : "18px" }} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className = "mb-3" >
                    <Form.Label  style = {{fontSize : "18px"}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Link to = "/profile">
              <Button variant = "danger">Submit</Button>
              </Link>
            </Form>
            <br />
        </div>
  
    )
}

export default Leftside
