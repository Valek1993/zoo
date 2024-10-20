import React from 'react';
import Nav from "./Nav";
import {NavLink} from "react-router-dom";
import Footer from "./Footer";

const SucsessRequest = (props) => {

    const handleClick = () => {
        localStorage.setItem('basket', JSON.stringify([]))
    }


    return (
        <div>
            <Nav name={props.name} len_basket={props.len_basket}/>
                <h5 className="text-center">Поздравляем! Ваш заказ оформлен!</h5>
            <ul></ul>
            <div className="d-grid gap-1 col-2 mx-auto"><NavLink to={'/'}>
                <button className="btn btn-primary" type="button" onClick={() => handleClick()}>Перейти на главную</button>
            </NavLink>
                <ul></ul>
            </div>
            <ul></ul>
            <div><Footer/></div>
        </div>
    );
};

export default SucsessRequest;