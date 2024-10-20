import React, {useState} from 'react';
import Nav from "../Nav";
import {SyntheticEvent} from "react";
import { Navigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [bad_request, setRequest] = useState('')

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })

        })

        setRequest(response.statusText)
        setRedirect(true)
    }
        if (bad_request === 'Forbidden') {return <Navigate to={"/bad_request_register"}/>}

        if (redirect) {
            return <Navigate to={"/login"}/>
        }

    return (

        <div>
            <Nav/>
            <body className="text-center">
            <form className="form-signin" onSubmit={submit}>
                <img className="mb-4" src="/image/background/logo/logo.jpg" alt="" width="100" height="100"/>
                <h1 className="h3 mb-3 font-weight-normal">Пожалуйста зарегистрируйтесь</h1>
                <input className="form-control" placeholder="Name" onChange={(event) => setName(event.target.value)} required/>
                <input type="email" className="form-control" placeholder="Email address" onChange={(event) => setEmail(event.target.value)} required/>
                <input type="password" className="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
            </form>
            </body>
        </div>
    );
};

export default Register;