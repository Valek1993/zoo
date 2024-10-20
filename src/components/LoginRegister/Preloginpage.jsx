import React from 'react';
import Nav from "../Nav";
import {NavLink} from "react-router-dom";
import Footer1 from "./Footer1";

const Preloginpage = () => {
    return (
        <div>
            <>
                <div><Nav/>
                    <h5 className="text-center">"Вы не авторизованы.Пожалуйста авторизуйтесь или зарегистрируйтесь!
                        "</h5>
                    <ul></ul>
                </div>

                <div className="d-grid gap-1 col-2 mx-auto"><NavLink to={'/login'}>
                    <button className="btn btn-primary" type="button" >Авторизация</button>
                </NavLink>
                    <ul></ul>
                    <NavLink to={'/register'}>
                        <button className="btn btn-primary" type="submit">Регистрация</button>
                    </NavLink>
                </div>
                <ul></ul>
                <Footer1/>
            </>
        </div>
    );
};

export default Preloginpage;