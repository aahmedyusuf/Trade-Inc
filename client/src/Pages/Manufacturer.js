import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";
import { endPoint } from './endpoint';
import { useState ,useEffect} from 'react';

function Manufacturer() {
    document.title = "Manufacturer"

    const [status, setstatus] = useState('loged_out');
    useEffect(() => {
    fetch(`${endPoint}/seasion/`)
    .then(response => response.json())
    .then(data => {
      if(data.username !== ""){
        setstatus("loged_in")
      }
    });
    },[]);
    if(status === "loged_out"){
        return(
            <div>
                    <h1> You do not have acess to this page</h1>
 
            </div>
        )
     }else{
        return (
            <div>
                <Navbar></Navbar>
                <Card_Holder></Card_Holder>
            </div>
        )
     }

}

function Navbar() {
    function handlelogoutSubmit() {
        fetch(`${endPoint}/logout`);
    }
    return (
        <ul>
            <li><Link to="/Manufacturer" style={{ background: 'rgb(55, 101, 189)' }}>My Products</Link></li>
            <li><Link to="/CreateProduct">Create Products</Link></li>
            <li>
                <Link to="/">
                    <span onClick={handlelogoutSubmit}>Logout</span>
                </Link>
            </li>


        </ul>
    );
}

function Card_Holder() {
    const products = []
    const [status, setstatus] = useState(products);

    useEffect(() => {
        fetch(`${endPoint}/seasion/`)
        .then(response => response.json())
        .then(data => {

            fetch(`${endPoint}/getProduct_Manufacturer/?username=${data.username}`)
            .then(response => response.json())
            .then(data => {
                setstatus(data);
            })
        });
    }, [])

    if(status.length > 0){
        return(
            <div className="centerd">
                <div className="Card_Holder">
                {Object.entries(status).map(([key, value]) => (
                    <Card key={key} {...value}></Card>
                ))}
                </div>
             </div>
        )
    }else{
        return (
            <div className="centerd">
                <div className="Card_Holder">


                </div>
            </div>
        )
    }
}

function Card(props) {
    return (
        <div className="Card">
            <img src={props.url} />
            <div className="container_home">
                <br />
                <h1>{props.name}</h1>
                <h3>{props.description}</h3>
            </div >
            <button>Delete</button>
        </div>
    )
}
export default Manufacturer;