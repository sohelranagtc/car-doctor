import React from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div className="hero mt-20 mb-52">
            <form onClick={handleLogin}>
                <div className="md:flex items-center md:space-y-10 p-5 ">
                    <div className="text-center p-5 md:mr-20">
                        <img src={login} alt="" />
                    </div>
                    <div className="card md:flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl font-semibold mb-5'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='text-center'>
                                New in Car Doctor? <Link className='text-orange-600 font-semibold' to='/signup'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;