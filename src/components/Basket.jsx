import React, {SyntheticEvent, useEffect, useRef, useState} from "react"
import {useContext} from "react";

import {useSelector} from "react-redux";
import {store} from "../redux";
import Nav from "./Nav";
import Footer from "./Footer";
import {setItemInCart} from "../redux/cart/reducer";
import Preloginpage from "./LoginRegister/Preloginpage";
import _ from "lodash";
import {Navigate} from "react-router-dom";


const Basket = (props) =>{


    // const items = useSelector(state => state.cart.itemsInCart)
    const _ = require("lodash")
    const Items = JSON.parse(localStorage.getItem('basket'))
    Items.forEach(obj => obj.description = undefined);
    Items.forEach(obj => obj.image = undefined);
    Items.forEach(obj => obj.link = undefined);
    Items.forEach(obj => obj.image_link = undefined);
    const items = _.uniqBy((Items), 'id_image')
    const [basketCatDry, setBasketCatDry] = useState(items)
    const [total_amount, setTotal_amount] = useState(0)


    useEffect(() => {
        let summ = items.reduce(
            (total_amount, {price}) => total_amount + Number(price),
            0
        );

        setTotal_amount(summ.toFixed(2));
        setOrdercost(total_amount)
        setCustomer(props.id)
    }, [items]);


    const handleClickCount = (item, item_id) => {
        item.count_product = item.count_product + 1
        item.price = ((Number(item.price) + (Number(item.price) / (item.count_product - 1))).toFixed(2))
        const data = items.filter(cat => {
            return cat.id !== item_id
        })
        localStorage.setItem('basket', JSON.stringify([...data, item]))
        props.setLoaded(false)
    }

    const handleClick = (item_id, name, item) => {
        if (item.count_product === 1) {
            const data = items.filter(cat => {
                return cat.id !== item_id || cat.name !== name
            })
            localStorage.setItem('basket', JSON.stringify(data))
            setBasketCatDry(data)
            props.setLoaded(false)
        }
        if (item.count_product > 1) {
            item.price = ((Number(item.price) - (Number(item.price) / (item.count_product))).toFixed(2))
            item.count_product = item.count_product - 1
            const data = items.filter(cat => {
                return cat.id !== item_id
            })
            localStorage.setItem('basket', JSON.stringify([...data, item]))
            props.setLoaded(false)
        }

    }


    const [customer, setCustomer] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const [order_cost, setOrdercost] = useState(0.00)
    const [text_orders, setText_orders] = useState(JSON.stringify(items))
    const [fail, setFail] = useState('')
    const [load, setLoad] = useState(false)
    const [choices_delivery, setChoices_delivery] = useState('Самовывоз')
    const [choices_paid, setChoices_paid] = useState('Оплата наличными')

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (order_cost !== '0.00') {
            const response = await fetch('http://localhost:8000/order', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    customer,
                    name,
                    email,
                    address,
                    phone,
                    comment,
                    order_cost,
                    text_orders,
                    choices_delivery,
                    choices_paid
                })
            })


        setLoad(true)
        if (response.statusText === 'Bad Request') {
            setFail('Bad Request')
        }}
    }

    if (fail === 'Bad Request') {
        return <Navigate to={"/bad_request"}/>
    }
    if (fail !== 'Bad Request' && load) {
        return <Navigate to={"/success_request"}/>
    }

    // if (order_cost === '0.00') {
    //     return <Navigate to={"/bad_request"}/>
    // }

    return (

        <>
            {(props.name !== undefined) ? (
                <div>
                    <Nav name={props.name} len_basket={props.len_basket}/>
                    {basketCatDry?.length ? (basketCatDry.map((item, index) => {
                        if (item.name === "кошка") {
                            return <table className="table">
                                <thead>
                                <tr>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"><img src={"/image/image_cat/" + item.id_image + ".png"} width='70'
                                                         height="70"/></th>
                                    <td>{item.title}</td>
                                    <td>{item.availability}</td>
                                    <td>{item.price} р.</td>
                                    <td>Кол-во: {item.count_product}</td>
                                    <button type="button" className="btn btn-outline-danger"
                                            onClick={() => handleClickCount(item, item.id)}>Добавить
                                    </button>
                                    <button type="button" className="btn btn-outline-danger"
                                            onClick={() => handleClick(item.id, item.name, item)}>Удалить
                                    </button>
                                </tr>
                                </tbody>
                            </table>
                        } else {
                            return <table className="table">
                                <thead>
                                <tr>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"><img src={"/image/image_dog_dry/" + item.id_image + ".png"}
                                                         width='70' height="70"/></th>
                                    <td>{item.title}</td>
                                    <td>{item.availability}</td>
                                    <td>{item.price} р.</td>
                                    <td>Кол-во: {item.count_product}</td>
                                    <button type="button" className="btn btn-outline-danger"
                                            onClick={() => handleClickCount(item, item.id)}>Добавить
                                    </button>
                                    <button type="button" className="btn btn-outline-danger"
                                            onClick={() => handleClick(item.id, item.name, item)}>Удалить
                                    </button>
                                </tr>
                                </tbody>
                            </table>
                        }
                    })) : (<div><h1 className="text-center">Корзина пуста!</h1></div>)}
                    <div>
                        <p className="text-center"><h5>Итоговая сумма заказа: {total_amount} рублей</h5></p>
                    </div>
                    <div className="col-11 col-md-6 col-lg-8 mx-5 mb-4">
                        <form className="row g-4 needs-validation" noValidate onSubmit={submit}>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom01" className="form-label">Имя</label>
                                <input type="text" className="form-control" id="validationCustom01"
                                       onChange={(event) => setName(event.target.value)} required/>
                                <div className="valid-feedback">
                                    Все хорошо!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control" id="validationCustomUsername"
                                           aria-describedby="inputGroupPrepend"
                                           onChange={(event) => setEmail(event.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Пожалуйста, выберите имя пользователя.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom03" className="form-label">Телефон</label>
                                <input type="text" className="form-control" id="validationCustom03"
                                       onChange={(event) => setPhone(event.target.value)} required/>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="validationCustom05" className="form-label">Адрес</label>
                                <input type="text" className="form-control" id="validationCustom05"
                                       onChange={(event) => setAdress(event.target.value)} required/>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom05" className="form-label">Способ доставки</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e)=> setChoices_delivery(e.target.value)}>
                                    <option>Самовывоз</option>
                                    <option>Курьером</option>
                                    <option>Европочта</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom05" className="form-label">Способ оплаты</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e)=> setChoices_paid(e.target.value)}>
                                    <option>Оплата наличными</option>
                                    <option>Оплата картой</option>
                                    <option>Наложенный платеж</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Коментарий к
                                    заказу</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          onChange={(event) => setComment(event.target.value)} rows="3"></textarea>
                            </div>
                            <div className="col-11">
                                <button className="btn btn-outline-danger" type="submit">Оформить заказ</button>
                            </div>
                        </form>

                    </div>

                    <Footer/>
                </div>) : (<Preloginpage/>)}
        </>


           );
        };


export default Basket;