import './CreateProduct.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loginImage from './SVG/login2.svg';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { endPoint } from './endpoint';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    document.title = "Create Product"
    const productinfo = {
        manufacturer_name: ' ',
        productname: ' ',
        description: ' ',
        imgurl: ' ',
    };
    const [product, setProduct] = useState(productinfo);


    function createproduct() {
        fetch(`${endPoint}/seasion/`)
        .then(response => response.json())
        .then(data => {
            fetch(`${endPoint}/CreateProduct/?username=${data.username}&productname=${product.productname}&description=${product.description}&url=${product.imgurl}`)
            .then(response => console.log(response.status));
        });

    }

    return (
        <div>
            <Navbar></Navbar>

            <center>
                <input className="Field" type="text" id="fproductname" name="fproductname" placeholder="Product Name" onChange={(event) => setProduct({ ...product, productname: event.target.value })} />
                <br />
                <input className="Field" type="text" id="fproducturl" name="fproducturl" placeholder="Product Img url " onChange={(event) => setProduct({ ...product, imgurl: event.target.value })} />
                <br />
                <input className="Field" type="text" id="fproduct_description" name="fproduct_description" placeholder="Product Description" onChange={(event) => setProduct({ ...product, description: event.target.value })} />
                <br />
                <button onClick={createproduct}> Create </button>
            </center>
        </div>
    )

}

function Navbar() {
    return (
        <ul>
            <li><Link to="/Manufacturer">My Products</Link></li>
            <li><Link to="/CreateProduct" style={{ background: 'rgb(55, 101, 189)' }}>Create Products</Link></li>
            <li><Link to="/">Logout</Link></li>

        </ul>
    );
}



export default CreateProduct;