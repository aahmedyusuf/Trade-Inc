import './Attentition_Page.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';
import { useState } from 'react';
import { endPoint } from './endpoint';
import { useNavigate } from 'react-router-dom';

function Attentition_Page() {
  document.title = "Welcome"

  const [pageState, setpageState] = useState('Check');

  function handleSubmit(value) {
    setpageState(value);
  }

  switch (pageState) {

    case 'Check':
      return <Check onClick={handleSubmit} />
    case 'LoginAsCustomer':
      return <LoginAsCustomer onClick={handleSubmit} />
    case 'LoginAsManufacturer':
      return <LoginAsManufacturer onClick={handleSubmit} />
    case 'SignUpSmallBusiness':
      return <SignUpSmallBusiness onClick={handleSubmit} />
    case 'SignUpManufacturer':
      return <SignUpManufacturer onClick={handleSubmit} />

  }

}

//checks if customer is a small business or manufacturer
function Check({ onClick }) {

  return (
    <div className="Parent">
      <div className="Account-Info">
        <div>
          <center>
            <h1> Welcome to Trade-Inc </h1>
            <h2> A place where small business can Trade directly with Manufacturer. </h2>
            <br />
            <h2> Are you A </h2>
            <button className="Login-Button" id="Blogin" name="Blogin" type="button" onClick={() => onClick("LoginAsCustomer")}> Small Business </button>
            <br />
            <button className="Login-Button" id="Blogin" name="Blogin" type="button" onClick={() => onClick('LoginAsManufacturer')}> Manufacturer </button>

          </center>

        </div>
      </div>

      <img src={loginImage} alt=" Login Image" className="Image-Section" />


    </div>
  )

}

function LoginAsCustomer({onClick }) {
  const navigate = useNavigate();

  const info = {
    username: '',
    password: '',
    result: ''
  };
  const [login, setlogin] = useState(info);

  function handleLogin() {
    fetch(`${endPoint}/verifyLogin/?username=${login.username}&password=${login.password}&type=customer`)
      .then(response => response.json())
      .then(data => {
        if (data.status === "Failed") {
          setlogin({ ...login, result: "invalid login" });
        } else {
          setlogin({ ...login, result: "login in..." });
          navigate("/home");

        }
      });
  }
  return (
    <div className="Parent">
      <div className="Account-Info">
        <div>
          <button className="Login-Button" id="Bback" name="Bback" type="button" onClick={() => onClick("Check")} style={{ width: 100 }}>Back</button>
          <center>
            <div className="Login-Form">
              <h4>Log in to your Trade-inc small business account</h4>
              <input className="Field" type="text" id="fusername" name="fusername" placeholder="Username" onChange={(event) => setlogin({ ...login, username: event.target.value })} />
              <input className="Field" type="password" id="fpassword" name="fpassword" placeholder="Password" onChange={(event) => setlogin({ ...login, password: event.target.value })} />
              <button className="Login-Button" id="Blogin" name="Blogin" type="button" onClick={handleLogin}> Log in </button>
              <br />
              <h3>{login.result}</h3>
              <button className="Login-Button" id="Bsignup" name="Bsignup" type="button" onClick={() => onClick("SignUpSmallBusiness")} style={{ width: 300 }}>Sign up</button>
            </div>
          </center>
        </div>
      </div>
      <img src={loginImage} alt=" Login Image" className="Image-Section" />
    </div>
  )
}
function LoginAsManufacturer({ onClick }) {
  const navigate = useNavigate();
  const manlogin = {
    username: '',
    password: '',
    result: ''
  };
  const [manufacturelogin, setManfacturelogin] = useState(manlogin);

  function handlemanfacturerLogin() {
    console.log(manufacturelogin.username + " " + manufacturelogin.password);
    fetch(`${endPoint}/verifyLogin/?username=${manufacturelogin.username}&password=${manufacturelogin.password}&type=manfu`)
      .then(response => response.json())
      .then(data => {
        if (data.status === "Failed") {
          setManfacturelogin({ ...manufacturelogin, result: "invalid login" });
        } else {
          setManfacturelogin({ ...manufacturelogin, result: "login in..." });
          navigate("/Manufacturer");

        }
      });
  }

  return (
    <div className="Parent">
      <div className="Account-Info">
        <div>
          <button className="Login-Button" id="Bback" name="Bback" type="button" onClick={() => onClick("Check")} style={{ width: 100 }}>Back</button>
          <center>
            <div className="Login-Form">
              <h4>Log in to your Trade-inc Manufacturer business account</h4>
              <input className="Field" type="text" id="fusername" name="fusername" placeholder="Username" onChange={(event) => setManfacturelogin({ ...manufacturelogin, username: event.target.value })} />
              <input className="Field" type="password" id="fpassword" name="fpassword" placeholder="Password" onChange={(event) => setManfacturelogin({ ...manufacturelogin, password: event.target.value })} />
              <button className="Login-Button" id="Blogin" name="Blogin" onClick={handlemanfacturerLogin} type="button"> Log in </button>
              <br />
              <h3>{manufacturelogin.result}</h3>
              <button className="Login-Button" id="Bsignup" name="Bsignup" type="button" onClick={() => onClick("SignUpManufacturer")} style={{ width: 300 }}>Sign up</button>
            </div>
          </center>
        </div>
      </div>
      <img src={loginImage} alt=" Login Image" className="Image-Section" />
    </div>
  )
}

function SignUpSmallBusiness({ onClick }) {
  const navigate = useNavigate();

  const info = {
    username: '',
    password: '',
    name: '',
    description: '',
    address: ''
  };
  const [signUp, setsignUp] = useState(info);


  function handleSignup() {
    fetch(`${endPoint}/CreateCustomer/?username=${signUp.username}&password=${signUp.password}&name=${signUp.name}&description=${signUp.description}&address=${signUp.address}`)
      .then(response => {
        navigate("/");
        console.log(response.status);


      })
  }

  return (
    <div className="Parent">
      <div className="Account-Info">
        <div>
          <button className="Login-Button" id="Bback" name="Bback" type="button" onClick={() => onClick("Check")} style={{ width: 100 }}>Back</button>
          <center>
            <form>
              <h1>Welcome to Trade-inc</h1>
              <br />
              <h3>Please input the correct Information to create your account</h3>
              <br />
              <input className="Field" type="text" id="fusername" name="fusername" placeholder="Username" onChange={(event) => setsignUp({ ...signUp, username: event.target.value })} />
              <br />
              <input className="Field" type="text" id="fpassword" name="fpassword" placeholder="Password" onChange={(event) => setsignUp({ ...signUp, password: event.target.value })} />
              <br />
              <input className="Field" type="text" id="fname" name="fname" placeholder="Name of the entity" onChange={(event) => setsignUp({ ...signUp, name: event.target.value })} />
              <br />
              <input className="Field" type="text" id="fbusiness_dec" name="fbusiness_dec" placeholder="Description of the business..." onChange={(event) => setsignUp({ ...signUp, description: event.target.value })} />
              <br />
              <input className="Field" type="text" id="faddress" name="faddress" placeholder="Business Address " onChange={(event) => setsignUp({ ...signUp, address: event.target.value })} />
              <br />
              <button className="Login-Button" id="Blogin" name="Blogin" type="button" onClick={handleSignup}> Create Account </button>
            </form>
          </center>
        </div>
      </div>
      <img src={loginImage} alt=" Login Image" className="Image-Section" />
    </div>
  )
}

function SignUpManufacturer({ onClick }) {
  const navigate = useNavigate();

  const manufacturer_info = {
    username: '',
    password: '',
    name: '',
    description: '',
    address: ''
  };
  const [manufacturesignUp, setManufacturesignUp] = useState(manufacturer_info);
  function manSignup() {
    fetch(`${endPoint}/CreateManufacturer/?username=${manufacturesignUp.username}&password=${manufacturesignUp.password}&name=${manufacturesignUp.name}&description=${manufacturesignUp.description}&address=${manufacturesignUp.address}`)
      .then(response => {
        console.log(response.status);
        navigate('/');
      })
  }

  return (
    <div className="Parent">
      <div className="Account-Info">
        <div>
          <button className="Login-Button" id="Bback" name="Bback" type="button" onClick={() => onClick("Check")} style={{ width: 100 }}>Back</button>
          <center>
            <h1>Welcome to Trade-inc</h1>
            <br />
            <h3>Please input the correct Information to create your account</h3>
            <br />
            <input className="Field" type="text" id="fusername" name="fusername" placeholder="Username" onChange={(event) => setManufacturesignUp({ ...manufacturesignUp, username: event.target.value })} />
            <br />
            <input className="Field" type="text" id="fpassword" name="fpassword" placeholder="Password" onChange={(event) => setManufacturesignUp({ ...manufacturesignUp, password: event.target.value })} />
            <br />
            <input className="Field" type="text" id="fname" name="fname" placeholder="Name of the entity" onChange={(event) => setManufacturesignUp({ ...manufacturesignUp, name: event.target.value })} />
            <br />
            <input className="Field" type="text" id="fbusiness_dec" name="fbusiness_dec" placeholder="Description of the business..." onChange={(event) => setManufacturesignUp({ ...manufacturesignUp, description: event.target.value })} />
            <br />
            <input className="Field" type="text" id="faddress" name="faddress" placeholder="Business Address " onChange={(event) => setManufacturesignUp({ ...manufacturesignUp, address: event.target.value })} />
            <br />
            <button className="Login-Button" id="Blogin" name="Blogin" type="button" onClick={manSignup} > Create Account </button>
          </center>
        </div>
      </div>
      <img src={loginImage} alt=" Login Image" className="Image-Section" />
    </div>
  )
}
export default Attentition_Page;
