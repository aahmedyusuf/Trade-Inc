import './CreateProduct.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';
import {  Link } from "react-router-dom";

function CreateProduct(){
    document.title = "Create Product"
    return(
    <div>
        <Navbar></Navbar>

        <center>
        <input className = "Field" type="text" id="fproductname" name="fproductname" placeholder = "Product Name"/>
        <br/>
        <input className = "Field" type="text" id="fproducturl" name="fproducturl" placeholder = "Product Img url "/>
        <br/>
        <input className = "Field" type="text" id="fproduct_description" name="fproduct_description" placeholder = "Product Description"/>
        <br/>
        <button> Create </button>
        </center>
    </div>
    )

}

function Navbar(){
    return (
        <ul>
          <li><Link to="/Manufacturer">My Products</Link></li>
          <li><Link to="/CreateProduct" style={{background:'rgb(55, 101, 189)'}}>Create Products</Link></li>
          <li><Link to="/">Logout</Link></li>

        </ul>
    );
}



export default CreateProduct;