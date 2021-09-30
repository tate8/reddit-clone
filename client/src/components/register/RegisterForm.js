import React from "react"
import { Link } from 'react-router-dom'

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
                                <div class="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="fullName" class="form-control" name="fullName" required="true" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="username" required="true" />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password" required="true" />
                                </div>
                                <div class="form-group">
                                    <label for="avatar">Choose a profile picture</label>
                                    <input type="file" class="form-control" name="avatar" accept="image/*" id="file" />
                                </div>
                                <button type="submit" class="btn btn-outline-light register-button">Register</button>
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
                    <div class="card">
                        <div class="card-body">
                            <a class="btn btn-block" href="/auth/facebook" role="button">
                                <i class="fab fa-facebook"></i>
                                Sign Up with Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default RegisterForm