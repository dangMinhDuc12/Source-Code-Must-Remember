import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

function LogIn() {
    const [state, setState] = useState({
        username: '',
        password: '',
        redirect: false
    });

    function onChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    function onRedirect(e) {
        e.preventDefault();
        const { username, password } = state;
        if (username === 'admin' && password === 'admin') {
            setState({
                ...state,
                redirect: true
            })
        }


    }

    const location = useLocation();






    //Render

    if (state.redirect) {
        return <Redirect to={{
            pathname: '/products',
            state: {
                from: location,
                payload: 'abc'
            }
        }} />
    }







    return (


        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={onRedirect}>
                    <legend>Đăng nhập</legend>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={state.username}
                            onChange={onChange}
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            value={state.password}
                            onChange={onChange}
                            name="password" />
                    </div>



                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </form>

            </div>
        </div>

    )
}

export default LogIn
