import React from 'react';
import Nav from "../Nav";
import {NavLink} from "react-router-dom";
import Footer from "../Footer";

const BadRequestRegister = (props) => {
    return (
        <div>
            <>
            <div>
                <Nav name={props.name} len_basket={props.len_basket}/>
                <h5 className="text-center">Пользователь с таким email адресом уже существует</h5>
                <ul></ul>
                <div className="d-grid gap-1 col-2 mx-auto"><NavLink to={'/register'}>
                    <button className="btn btn-primary" type="button">Зарегистрироваться заново</button>
                </NavLink>
                    <ul></ul>
                </div>
            </div>
            <ul></ul>
            <div><Footer/></div>
        </>
        </div>
    );
};

export default BadRequestRegister;