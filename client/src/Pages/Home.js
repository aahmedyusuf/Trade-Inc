import './Home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {  Link } from "react-router-dom";
import {endPoint} from './endpoint';
import { useState ,useEffect} from 'react';

function Home(){
    document.title = "Home";
    const [status, setstatus] = useState('loged_out');
    useEffect(() => {
    fetch(`${endPoint}/seasion/`)
    .then(response => response.json())
    .then(data => {
      if(data.username != ""){
        setstatus("loged_in")
      }
    });
    });

    if(status == "loged_out"){
       return(
           <div>
                   <h1> You do not have acess to this page</h1>

           </div>
       )
    }else{
        return(
        <div>
            <Navbar></Navbar>
            <Card_Holder></Card_Holder>
        </div>
        )
    }

}

function Navbar(){
    function handleSubmit(){
        fetch(`${endPoint}/logout`);
    }
    return (
        <ul>
          <li><Link to="/home">Logout</Link></li>
          <li><Link to="/checkout">CheckOut</Link></li>
          <li>
            <Link to="/">
             <span onClick={handleSubmit}>Home</span>
            </Link>
        </li>
        </ul>
    );
}

function Card_Holder(){
    return(
        <div className = "centerd">
        <div className = "Card_Holder">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
        </div>
    )
}

function Card(){
    return(
        <div className="Card">
        <img src="https://images.heb.com/is/image/HEBGrocery/000145352"/>
        <div className = "container_home"> 
        <br/>
        <h1> Title </h1>
        <h3> Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.</h3>
        </div >
        <button> Add to Card</button>
        </div>
    )
}

export default Home;