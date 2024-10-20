import React, {SyntheticEvent, useState} from "react"
import Nav from "../Nav";
import app from "../../App";
import {Navigate} from "react-router-dom";



const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [redirect, setRedirect] = useState(false)
    const [fail, setFail] = useState('')



    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })

        if (response.statusText === 'Forbidden') {setFail('Forbidden')} else {props.setRedirect(true)}

    }

        if (fail === 'Forbidden') {return <Navigate to={"/register"}/>}
        if (props.redirect) {
            return <Navigate to={"/"}/>
        }

    return (

        <div>
            <Nav name={props.name} len_basket={props.len_basket}/>
            <body className="text-center">
            <form className="form-signin" onSubmit={submit}>
                <img className="mb-4" src="/image/background/logo/logo.jpg" alt="" width="100" height="100"/>
                <h1 className="h3 mb-3 font-weight-normal">Пожалуйста авторизуйтесь</h1>
                <input type="email" className="form-control" placeholder="Email address"
                       onChange={(event) => setEmail(event.target.value)} required/>
                <input type="password" className="form-control" placeholder="Password"
                       onChange={(event) => setPassword(event.target.value)} required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Авторизоваться</button>
            </form>
            </body>
        </div>


    )
}

export default Login;