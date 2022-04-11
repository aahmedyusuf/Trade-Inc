import './Attentition_Page.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';
import { useState } from 'react';

const endPoint = process.env.endPoint ||'http://localhost:4000/api';

function Attentition_Page() {
    document.title = "Welcome"
    console.log(endPoint);
    fetch(`${endPoint}/status`)
    .then(response => response.json())
    .then(data => console.log(data));

    const [pageState, setpageState] = useState('Check');
    function handleSubmit(value) {
      setpageState(value);
    }

    switch(pageState){

      case'Check':
      return <Check onClick ={handleSubmit}/>
      case'LoginAsCustomer':
      return <LoginAsCustomer onClick ={handleSubmit}/>
      case'LoginAsManufacturer':
      return <LoginAsManufacturer onClick ={handleSubmit}/>
      case'SignUpSmallBusiness':
      return <SignUpSmallBusiness onClick ={handleSubmit}/>
      case'SignUpManufacturer':
      return <SignUpManufacturer onClick ={handleSubmit}/>

    }
    
}

//checks if customer is a small business or manufacturer
function Check({onClick}){
  function handleSubmit(value) {
  }
  return(
    <div className = "Parent">
    <div className = "Account-Info">
    <div>
      <center>
      <h1> Welcome to Trade-Inc </h1>
      <h2> A place where small business can Trade directly with Manufacturer. </h2>
      <br/>
      <h2> Are you A </h2>
      <button className = "Login-Button" id="Blogin" name="Blogin" type= "button" onClick={() =>  onClick("LoginAsCustomer")}> Small Business </button>
      <br/>
      <button className = "Login-Button" id="Blogin" name="Blogin" type= "button" onClick={() => onClick('LoginAsManufacturer')}> Manufacturer </button>

      </center>

    </div>
    </div>

  <img src= {loginImage} alt=" Login Image" className = "Image-Section"/>


  </div>
  )

}

function LoginAsCustomer({onClick}){
  return(
    <div className = "Parent">
    <div className = "Account-Info">
    <div>
    <button className = "Login-Button" id="Bback" name="Bback" type= "button" onClick={() =>  onClick("Check")} style ={{width: 100}}>Back</button>
      <center>
      <div className = "Login-Form">
          <h4>Log in to your Trade-inc small business account</h4>
          <input className = "Field" type="text" id="fusername" name="fusername" placeholder = "Username"/>
          <input className = "Field" type="password" id="fpassword" name="fpassword" placeholder = "Password"/>         
          <button className = "Login-Button" id="Blogin" name="Blogin" type= "button"> Log in </button>
          <br/>
          <button className = "Login-Button" id="Bsignup" name="Bsignup" type= "button" onClick={() =>  onClick("SignUpSmallBusiness")} style ={{width: 300}}>Sign up</button>
          </div>
      </center>
    </div>
    </div>
    <img src= {loginImage} alt=" Login Image" className = "Image-Section"/>
  </div>
  )
}
function LoginAsManufacturer({onClick}){
  return(
    <div className = "Parent">
    <div className = "Account-Info">
    <div>
    <button className = "Login-Button" id="Bback" name="Bback" type= "button" onClick={() =>  onClick("Check")} style ={{width: 100}}>Back</button>
      <center>
      <div className = "Login-Form">
          <h4>Log in to your Trade-inc Manufacturer business account</h4>
          <input className = "Field" type="text" id="fusername" name="fusername" placeholder = "Username"/>
          <input className = "Field" type="password" id="fpassword" name="fpassword" placeholder = "Password"/>         
          <button className = "Login-Button" id="Blogin" name="Blogin" type= "button"> Log in </button>
          <br/>
          <button className = "Login-Button" id="Bsignup" name="Bsignup" type= "button" onClick={() =>  onClick("SignUpManufacturer")} style ={{width: 300}}>Sign up</button>
          </div>
      </center>
    </div>
    </div>
    <img src= {loginImage} alt=" Login Image" className = "Image-Section"/>
  </div>
  )
}

function SignUpSmallBusiness({onClick}){
  return(
    <div className = "Parent">
    <div className = "Account-Info">
    <div>     
    <button className = "Login-Button" id="Bback" name="Bback" type= "button" onClick={() =>  onClick("Check")} style ={{width: 100}}>Back</button>
        <center>
          <h1>Welcome to Trade-inc</h1>
          <br/>
          <h3>Please input the correct Information to create your account</h3>
          <br/>
          <input className = "Field" type="text" id="fusername" name="fusername" placeholder = "Username"/>
          <br/>
          <input className = "Field" type="text" id="fpassword" name="fpassword" placeholder = "Password"/>
          <br/>
          <input className = "Field" type="text" id="fname" name="fname" placeholder = "Name of the entity"/>
          <br/>
          <input className = "Field" type="text" id="fbusiness_dec" name="fbusiness_dec" placeholder = "Description of the business..."/>
          <br/>
          <input className = "Field" type="text" id="faddress" name="faddress" placeholder = "Business Address "/>
          <br/>
          <button className = "Login-Button" id="Blogin" name="Blogin" type= "button" > Create Account </button>
        </center>
    </div>
    </div>
    <img src= {loginImage} alt=" Login Image" className = "Image-Section"/>
    </div>
    )
}

function SignUpManufacturer({onClick}){
  return(
    <div className = "Parent">
    <div className = "Account-Info">
    <div>     
    <button className = "Login-Button" id="Bback" name="Bback" type= "button" onClick={() =>  onClick("Check")} style ={{width: 100}}>Back</button>
        <center>
          <h1>Welcome to Trade-inc</h1>
          <br/>
          <h3>Please input the correct Information to create your account</h3>
          <br/>
          <input className = "Field" type="text" id="fusername" name="fusername" placeholder = "Username"/>
          <br/>
          <input className = "Field" type="text" id="fpassword" name="fpassword" placeholder = "Password"/>
          <br/>
          <input className = "Field" type="text" id="fname" name="fname" placeholder = "Name of the entity"/>
          <br/>
          <input className = "Field" type="text" id="fbusiness_dec" name="fbusiness_dec" placeholder = "Description of the business..."/>
          <br/>
          <input className = "Field" type="text" id="faddress" name="faddress" placeholder = "Business Address "/>
          <br/>
          <button className = "Login-Button" id="Blogin" name="Blogin" type= "button" > Create Account </button>
        </center>
    </div>
    </div>
    <img src= {loginImage} alt=" Login Image" className = "Image-Section"/>
    </div>
    )
}
export default Attentition_Page;
