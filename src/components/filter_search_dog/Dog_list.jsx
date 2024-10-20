import React, {useEffect, useRef, useState} from "react"
import axios from "axios";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart} from "../../redux/cart/reducer";
import Login from "../LoginRegister/Login";



 const DogList = (props) =>{


     const dispatch = useDispatch()
     const items = useSelector(state => state.cart.itemsInCart)
     const basket = "basket"
     const isMounted = useRef(false)

     useEffect(() => {
         if (isMounted.current) {
         localStorage.setItem(basket,JSON.stringify(items))}
         isMounted.current = true
     }, [items]);


     const handleClick = () => {
             dispatch(setItemInCart(props.item))
             props.setLoaded(false)

     }


    return (

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <a href={'/product/dog/' + props.id}><img src={"/image/image_dog_dry/" + props.id_image + ".png"}  className="card-img-top img-fluid"/></a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-title">Цена товара: {props.price} р.</h6>
                    <h6 className="card-title">Вес товара(кг): {props.weight}</h6>
                    <h6 className="card-title">Доступность: {props.availability}</h6>
                    <NavLink to={'/product/dog/' + props.id}><h5>Подробнее о товаре</h5></NavLink>
                    <button type="button"  className="btn btn-outline-danger" onClick={() => handleClick()}><i className="bi bi-twitter">Добавить в корзину</i></button>
                </div>

            </div>

        </div>


           );
        };


export default DogList;