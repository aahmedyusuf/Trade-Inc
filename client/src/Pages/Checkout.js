import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './Checkout.css';
import {endPoint} from './endpoint';
import { useState ,useEffect} from 'react';
import {  Link } from "react-router-dom";

function Showall() {
    document.title = "Checkout"
    return (
        <div>
            <Navbar></Navbar>
            <br/>
            <h2 id="header">Welcome to the Checkout Page!</h2>    
            <ItemHolder></ItemHolder>
        </div>
    );
}
function Navbar(){
    function handleSubmit(){
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

function Cart({ item, manufacturer }) {
    return (
        <div class="col-25">
            <div class="container">
                <h4>Cart <span className="price"> </span></h4>
                <p>Manufacture 2 <span className="price" href = ""></span></p>
                <p>Manufacture 3 <span className="price">$</span></p>
                <p>Manufacture 4 <span className="price">$</span></p>
                <p><a href="#">{item} {manufacturer}</a> <span className="price">$</span></p>
                <hr />
            </div>
        </div>
    )
}

function ItemHolder(){
    const products = []
    const [status, setstatus] = useState(products);

    useEffect(() => {
        fetch(`${endPoint}/seasion/`)
        .then(response => response.json())
        .then(data => {
            console.log(data.username);

            fetch(`${endPoint}/getOrder/?username=${data.username}`)
            .then(response => response.json())
            .then(data => {
                setstatus(data);
            })
        });
    }, [])

    function refresh(){
        fetch(`${endPoint}/seasion/`)
        .then(response => response.json())
        .then(data => {
            console.log(data.username);

            fetch(`${endPoint}/getOrder/?username=${data.username}`)
            .then(response => response.json())
            .then(data => {
                setstatus(data);
            })
        });
    }

    if(status.length > 0){
        return(
            <div className = "ItemHolder">
                {Object.entries(status).map(([key, value]) => (
                    <Item key={key} props={value} refresh={refresh}></Item>
                ))}

            </div>
        )
    }else{
        return(
            <div> <h1> No item in checkout</h1></div>
        )
    }
}
function Item({props,refresh}){
    function remove(){
        fetch(`${endPoint}/removeOrder/?username=${props.username}&productName=${props.product}`);
        refresh();
    }
    return(
        <div className = "mini_Card">
            <img src={props.url} className="item_Img"/>
            <button className = "b_remove" onClick={remove}>X</button>
        </div>
    )
}

function Demo() {
    return (
        <div>
            <div class="accordion accordion-flush">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <p className="accordiontext">Name Information</p>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <form id="form_name">
                            <div className="row" id="cardrow">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label> Enter  First name:
                                            <input type="text" className="form-control form-control-lg" id="fname" placeholder="First Name" required />
                                        </label>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>Enter Last name:
                                                <input type="text" className="form-control form-control-lg" id="lname" placeholder="Last Name" required />
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>Enter street address
                                                <input type="text" className="form-control form-control-lg" id="address" placeholder="Address" required />
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label  >Enter your city:
                                                <input type="city" className="form-control form-control-lg" id="city" placeholder="City" required />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label  >Enter your State:
                                                <input type="text" className="form-control form-control-lg" id="state" placeholder="state" required />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label  >Enter your Country
                                                <input type="text" className="form-control form-control-lg" id="country" placeholder="country" required />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label> Zip code:
                                                <input type="text" className="form-control form-control-sm" id="zip" placeholder="Zip" maxLength={5} required />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}
function Carddetailes() {
    const submitForm = (e) => {
        this.props.history.push('/Thank_You');
    }

    return (
        <div>
            <div class="accordion accordion-flush">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <p className="accordiontext">Card Information</p>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <form id="form_name">
                            <h4 id="cardrow">Card Information</h4>
                            <div className="row" id="cardrow">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label>Enter  Name on the card:
                                            <input type="text" className="form-control form-control-lg" id="cardname" placeholder="Name" required />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label> Enter your card number
                                            <input type="text" className="form-control form-control-lg" id="cardnumber" name="card" placeholder="Card Number" maxLength={16} required />

                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label> Exp Date:
                                            <input type="month" className="form-control form-control-sm" id="cvv" name="cvv" placeholder="Exp Date" required />
                                        </label>

                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label> Enter your card cvv:
                                            <input type="text" className="form-control form-control-sm" id="cvv" name="cvv" placeholder="Cvv" maxLength={3} required />
                                        </label>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group">

                                            <label >Enter your zip code on card:
                                                <input type="text" className="form-control form-control-sm" id="zipcode" placeholder="10001" maxLength={5} required />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <button onClick={submitForm} form="form_name" className='button'>Submit</button>
            </div>
        </div>
    )

}

export default Showall;
