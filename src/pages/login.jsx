import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../models/api';
import { Auth } from '../models/auth';
import { useEffect } from 'react';

export const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(Auth.isAuthenticated()) {
            navigate('/dashboard');
        }
    }, []);

    const handle_submit = async (e) => {
        e.preventDefault();
        // navigate('/dashboard');

        const email = document.querySelector("#email").value;
        const pass = document.querySelector("#pass").value;

        Api.post("login", {
            "email": email,
            "pass": pass,
        }).then((response) => {
            console.log(response);

            if (response.status == 200) {
                toastr.success(response.data.message);

                Auth.login({
                    "user" : response.data.data,
                    "token" : response.data.token,
                });

                if (response.data.data.hotel === null) {
                    navigate('/new-hotel');
                } else {
                    navigate('/dashboard');
                }
            } else {
                let messages = '';
                let errors = response.response.data.errors;

                console.log(errors);

                if (errors) {
                    Object.keys(errors).forEach(key => {
                        messages += `<li key=${key}> ${errors[key]} </li>`;
                    });
                } else {
                    messages += `<li key=${response.response.data.erreur}> ${response.response.data.message} </li>`;
                }

                const errorAlerte = document.querySelector(".errorAlerte");
                errorAlerte.innerHTML = messages;
                document.querySelector('.alert').classList.remove("d-none");
            }
        }).catch((error) => {
            console.log("errr ",error);
        });

    }

    return (
        <>
            {/* <div id="preloader"><div id="status"><div className="spinner"></div></div></div> */}

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
                            <h4 className="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
                            <p className="text-muted text-center">Sign in to continue to Property Manager.</p>

                            <div className="alert alert-danger d-none" role="alert">
                              <h4 className="alert-heading">Error !!!</h4>

                              <ul className="errorAlerte"></ul>
                            </div>

                            <form className="form-horizontal m-t-30" onSubmit={handle_submit}>

                                <div className="form-group">
                                    <label htmlFor="username">EMail</label>
                                    <input type="text" className="form-control" id="email" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="userpassword">Password</label>
                                    <input type="password" className="form-control" id="pass" placeholder="Enter password" />
                                </div>

                                <div className="text-right">
                                    <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="m-t-40 text-center">
                    <p>Don't have an account ? <Link to="/register" className="font-500 font-14 text-primary font-secondary"> Signup Now </Link> </p>
                </div>

            </div>
        </>
    );
};