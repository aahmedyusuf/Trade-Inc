import './Home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';
import {  Link } from "react-router-dom";

function Manufacturer(){
    document.title = "Manufacturer"
    return(
    <div>
        <Navbar></Navbar>
        <Card_Holder></Card_Holder>
    </div>
    )

}

function Navbar(){
    return (
        <ul>
          <li><Link to="/Manufacturer" style={{background:'rgb(55, 101, 189)'}}>My Products</Link></li>
          <li><Link to="/CreateProduct">Create Products</Link></li>
          <li><Link to="/">Logout</Link></li>

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
export default Manufacturer;