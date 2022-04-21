import './Home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { endPoint } from './endpoint';
import { useState, useEffect } from 'react';

function Home() {
    document.title = "Home";
    const [status, setstatus] = useState('loged_out');
    useEffect(() => {
        fetch(`${endPoint}/seasion/`)
            .then(response => response.json())
            .then(data => {
                if (data.username != "") {
                    setstatus("loged_in")
                }
            });
    }, []);

    if (status == "loged_out") {
        return (
            <div>
                <h1> You do not have acess to this page</h1>

            </div>
        )
    } else {
        return (
            <div>
                <Navbar></Navbar>
                <Card_Holder></Card_Holder>
            </div>
        )
    }

}

function Navbar() {
    function handleSubmit() {
        fetch(`${endPoint}/logout`);
    }
    return (
        <ul>

            <li> <Link to="/home"> <span >Home</span></Link> </li>
            <li><Link to="/checkout">CheckOut</Link></li>
            <li> <Link to="/"> <span onClick={handleSubmit}>Logout</span> </Link></li>
        </ul>
    );
}

function Card_Holder() {
    const products = []
    const [status, setstatus] = useState(products);

    useEffect(() => {
        fetch(`${endPoint}/getProducts/`)
            .then(response => response.json())
            .then(data => {
                setstatus(data);
            })
    }, [])

    if (status.length > 0) {
        return (
            <div className="centerd">
                <div className="Card_Holder">
                    {Object.entries(status).map(([key, value]) => (
                        <Card key={key} {...value}></Card>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="centerd">
                <div className="Card_Holder">


                </div>
            </div>
        )
    }
}

function Card(props) {

    function addToCart() {
        //CreateOrder(req.query.username, req.query.manu_username,req.query.productname);
        fetch(`${endPoint}/seasion/`)
            .then(response => response.json())
            .then(data => {
                fetch(`${endPoint}/CreateOrder/?username=${data.username}&manu_username=${props.username}&productname=${props.name}`)
                    .then(response => response.json())
                    .then(data => console.log(data));
            })
    }


    return (
        <div className="Card">
            <img src={props.url} />
            <div className="container_home">
                <br />
                <h1>{props.name}</h1>
                <h3>{props.description}</h3>
            </div >
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Home;