import { Link, useNavigate } from "react-router-dom";
import { Api } from "../models/api";
import { useEffect } from "react";
import { Auth } from "../models/auth";

export const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(Auth.isAuthenticated()) {
            navigate('/dashboard');
        }
    }, []);

    const handle_submit = async (e) => {
        e.preventDefault();
        // navigate('/dashboard');

        const full_name = document.querySelector("#full_name").value;
        const email = document.querySelector("#email").value;
        const pass = document.querySelector("#pass").value;
        const confirm_pass = document.querySelector("#confirm_pass").value;
        const tel = document.querySelector("#tel").value;

        if (pass.value == confirm_pass.value) {
            Api.post("register", {
                "full_name": full_name,
                "email": email,
                "password": pass,
                "tel": tel
            }).then((response) => {

                if (response.status == 200) {
                    toastr.success(response.data.message);
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);
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
        } else {
            const errorAlerte = document.querySelector(".errorAlerte");
            errorAlerte.innerHTML = `<li>Passwords do not match</li>`;
            document.querySelector('.alert').classList.remove("d-none");
        }

    }

    return (
        <>
            <div className="accountbg"></div>
            <div className="wrapper-page">

                <div className="card">
                    <div className="card-body">

                        <h3 className="text-center m-0">
                            <a href="#" className="logo logo-admin">
                                <img src="assets/images/logo_dark.png" height="30" alt="logo" />
                            </a>
                        </h3>

                        <div className="p-3">
                            <h4 className="text-muted font-18 m-b-5 text-center">Register !</h4>

                            <div className="alert alert-danger d-none" role="alert">
                              <h4 className="alert-heading">Error !!!</h4>

                              <ul className="errorAlerte"></ul>
                            </div>

                            <form className="form-horizontal m-t-30" onSubmit={handle_submit}>

                                <div className="form-group">
                                    <label htmlFor="full_name">Full name</label>
                                    <input type="text" className="form-control" id="full_name" placeholder="Enter your full name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tel">Phone number</label>
                                    <input type="tel" className="form-control" id="tel" placeholder="Enter your phone number" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="userpassword">Password</label>
                                    <input type="password" className="form-control" id="pass" placeholder="Enter password" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="userpassword">Confirm password</label>
                                    <input type="password" className="form-control" id="confirm_pass" placeholder="Confirm your password" />
                                </div>

                                <div className="text-right">
                                    <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="m-t-40 text-center">
                    <p>Already have an account ? <Link to="/login" className="font-500 font-14 text-primary font-secondary"> Signin Now </Link> </p>
                </div>

            </div>
        </>
    );
};