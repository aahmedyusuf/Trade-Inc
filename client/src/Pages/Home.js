import '../App.css';
import './HomePageCss.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';


function Home_Page() {
    document.title = "Home"
  return (
      <div className = "Parent">
        <div className = "Account-Info">
          <center>
          <h1> Welcome to Trade-Inc </h1>
          <h2> A place where small business can do business with manufacturer. </h2>

          <div className = "Login-Form">
          <h4>Log in to your Trade-inc account</h4>
          <input className = "Field" type="text" id="fusername" name="fusername" placeholder = "Username"/>
          <input className = "Field" type="password" id="fpassword" name="fpassword" placeholder = "Password"/>
          
          <button className = "Login-Button" id="Blogin" name="Blogin" type= "button"> Log in </button>
          </div>

          </center>


        </div>

        <img src= {loginImage} alt=" Login Image" className = "Image-Section"/>


      </div>
  );
}

export default Home_Page;
