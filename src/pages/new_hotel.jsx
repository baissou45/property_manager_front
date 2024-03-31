import { Link, useNavigate } from "react-router-dom";
import { Api } from "../models/api";
import { useEffect } from "react";
import { Auth } from "../models/auth";

export const NewHotel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!Auth.isAuthenticated()) {
            navigate('/login');
        }
        
        if (Auth.authData().user.hotel != null) {
            navigate('/dashboard');
        }
    }, []);

    const handle_submit = (e) => {
        e.preventDefault();

        Api.post("hotels", {
            "name": document.querySelector("#name").value,
            "email": document.querySelector("#email").value,
            "tel": document.querySelector("#tel").value,
            "rate": document.querySelector("#rate").value,
            "address": document.querySelector("#address").value,
            "description": document.querySelector("#description").value,
            "zip": document.querySelector("#zip").value,
            "city": document.querySelector("#city").value,
            "country": document.querySelector("#country").value,
        }, true).then((response) => {

            if (response.status == 200) {

                toastr.success(response.data.message);

                Auth.login({
                    "user" : response.data.data,
                    "token" : response.data.token,
                });

                navigate('/dashboard');

            } else {

                let messages = '';
                let errors = response.response.data.errors;

                Object.keys(errors).forEach(key => {
                    messages += `<li key=${key}> ${errors[key]} </li>`;
                });

                const errorAlerte = document.querySelector(".errorAlerte");
                errorAlerte.innerHTML = messages;
                document.querySelector('.alert').classList.remove("d-none");

            }
        }).catch((error) => {
            // console.log("errr ",error);
        });

    }

    return (
        <>
            <div className="accountbg "></div>

            <div className="d-flex justify-content-center">
                <div className="w-75 p-5">
                    <div className="card shadow">
                        <div className="card-body">

                            <div className="p-3">
                                <h4 className="text-muted font-18 m-b-5 text-center">New Hotel !</h4>

                                <div className="alert alert-danger d-none" role="alert">
                                <h4 className="alert-heading">Error !!!</h4>

                                <ul className="errorAlerte"></ul>
                                </div>

                                <form className="form-horizontal m-t-30" onSubmit={handle_submit}>

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="full_name">Hotel name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter your hotel name" required />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Rate</label>
                                            <input type="number" className="form-control" id="rate" placeholder="Enter your hotel rate" min="1" max="5" required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your hotel email address" required />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="tel">Phone number</label>
                                            <input type="tel" className="form-control" id="tel" placeholder="Enter your hotel phone number" required />
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="address">Adress</label>
                                            <input type="text" className="form-control" id="address" placeholder="Enter your hotel adress" required />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="Enter your hotel zip" required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="city">City</label>
                                            <input type="text" className="form-control" id="city" placeholder="Enter your hotel adress" required />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="country">Country</label>
                                            <input type="text" className="form-control" id="country" placeholder="Enter your hotel country" required />
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <div className="form-group">
                                      <label htmlFor="description">Description</label>
                                      <textarea className="form-control" name="description" id="description" rows="3"></textarea>
                                    </div>

                                    <div className="text-right">
                                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};