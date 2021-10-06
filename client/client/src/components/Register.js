import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export const Register = () => {
  const [ user , setUser ] = useState({ name: "", email: "", password: "" });

  let name, value;
  const handleChange = (e) => {
    console.log(e.target.value);

    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]: value });
  };

  const handleSubmit =async(e)=>{
 e.preventDefault();
 const {name,email,password} = user;
   const response = await fetch("http://localhost:3030/users",{
     method:"POST",
     headers:{
         "Content-Type":"application/json"
     },
     body: JSON.stringify({
         name,email,password
     })
     
    


 });
 const data = await response.json();
 console.log(data)
 

  }
  return (
    <div>
      <Form method="post">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter email"
        
            value={user.email}
            onChange={handleChange}
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
          
            onChange={handleChange}
            value={user.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
     
            onChange={handleChange}
            value={user.name}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick ={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
