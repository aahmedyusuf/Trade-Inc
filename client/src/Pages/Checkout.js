import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Checkout.css';

function checkout() {

    document.title = "Check Out"
    const onSubmitHandler = (e) => {
        e.preventDefault();
        window.location.href = '/'
    }
    const submitForm = (e) => {
        this.props.history.push('/Thank_You');
    }
    return (
        <div>
            <h2 id="header">Welcome to the checkout page!</h2>

            <div class="col-25">
                <div class="container">
                    <h4>Cart <span className="price"> </span></h4>
                    <p><a href="#">Manufacture 1</a> <span className="price">$</span></p>
                    <p><a href="#">Manufacture 2</a> <span className="price">$</span></p>
                    <p><a href="#">Manufacture 3</a> <span className="price">$</span></p>
                    <p><a href="#">Manufacture 4</a> <span className="price">$</span></p>
                    <hr />
                    <p>Total <span className="price"><b>$</b></span></p>
                </div>
            </div>
            <form action="/" method="post" id="checkoutforms">
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

                <hr />

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



                <button onClick={submitForm} className='button'>Submit</button>


            </form >



        </div >


    );
}
export default checkout;



