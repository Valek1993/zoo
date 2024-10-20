import React, {useContext, useEffect, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import CustomContext from "../../context/Context";
import {setItemInCart} from "../../redux/cart/reducer";


 const CatList = (props) =>{

     // const {basketCatDry, setBasketCatDry} = useContext(CustomContext)
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
                <a href={'/product/cat/' + props.id}><img src={"/image/image_cat/" + props.id_image + ".png"}  className="card-img-top img-fluid"/></a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-title">Цена товара: {props.price} р.</h6>
                    <h6 className="card-title">Вес товара(кг): {props.weight}</h6>
                    <h6 className="card-title">Доступность: {props.availability}</h6>
                    <NavLink to={'/product/cat/' + props.id}><h5>Подробнее о товаре</h5></NavLink>
                    <button type="button"  className="btn btn-outline-danger" onClick={() => handleClick()}><i className="bi bi-twitter">Добавить в корзину</i></button>
                </div>

            </div>
        </div>


           );
        };


export default CatList;