import React from "react";
import { Link } from 'react-router-dom';

function RegisterForm()
{
    return (
        <>
        <div class="container register-container">
            <h1>Register</h1>

            <div class="row">
                <div class="col-sm-8">
                <div class="card">
                    <div class="card-body">

                    {/*  Makes POST request to /register route  */}
                    <form action="/register" method="POST">
                        {/* <div class="form-group">
                        <label for="full-name">Full Name</label>
                        <input type="full-name" class="form-control" name="full-name" />
                        </div> */}
                        <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="username" />
                        </div>
                        <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" />
                        </div>
                        <button type="submit" class="btn btn-dark btn-outline-light">Register</button>
                        <Link to="/login" className="btn btn dark">Login instead</Link>
                    </form>

                    </div>
                </div>
                </div>

                <div class="col-sm-4">
                <div class="card social-block">
                    <div class="card-body">
                    <a class="btn btn-block" href="/auth/google" role="button">
                        <i class="fab fa-google"></i>
                        Sign Up with Google
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default RegisterForm;