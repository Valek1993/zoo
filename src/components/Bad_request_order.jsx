import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";

const BadRequest = (props) => {
    return (
        <>
            <div>
                <Nav name={props.name} len_basket={props.len_basket}/>
                <h5 className="text-center">Произошла ошибка, введите корректные
                    данные и заполните форму заказа заново.</h5>
                <ul></ul>
                <div className="d-grid gap-1 col-2 mx-auto"><NavLink to={'/product/basket_product'}>
                    <button className="btn btn-primary" type="button">Оформить заказ заново</button>
                </NavLink>
                    <ul></ul>
                </div>
            </div>
            <ul></ul>
            <div><Footer/></div>
        </>
    );
};

export default BadRequest;