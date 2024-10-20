import React, {useContext, useEffect, useState} from "react"
import {Navigate, NavLink} from "react-router-dom";



const Nav = (props) => {

    const [value, setValue] = useState('')


    const logout = async () => {
        await fetch('http://localhost:8000/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })

        localStorage.setItem(props.name, JSON.stringify(JSON.parse(localStorage.getItem('basket'))))
    }


    let Auth;

    if (props.name === undefined) {
        Auth = (
            <ul>
                <li className="nav-item d-inline-block">
                    <a className="nav-link" aria-current="page" href="/login"><h6>Войти</h6></a>
                </li>
                <ul></ul>
                <li className="nav-item d-inline-block">
                    <a className="nav-link" href="/register"><h6>Регистрация</h6></a>
                </li>
            </ul>)
    } else {
        Auth =
            (<ul>
                <li className="nav-item d-inline-block">
                    <a className="nav-link" href="/login" onClick={() => logout()}><h6>Выйти</h6></a>
                </li>
            </ul>)
    }



    return (

        <div className="container justify-content-sm-center">

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Переключатель навигации">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/#"><img alt="logo" src="/image/background/logo/logo.jpg"
                                                                   width="70" height="70"/></a>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="/#"> <img alt="logo"
                                                                        src="/image/background/logo/logo_mts.png"
                                                                        width="20" height="20"/> +375-33-326-48-48</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/#"> <img alt="logo"
                                                                        src="/image/background/logo/logo_a1.png"
                                                                        width="35" height="15"/> +375-29-373-12-13</a>
                            </li>

                            <li className="nav-item dropdown">


                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Для собак
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/search/sychoy/dog">Сухой корм для собак</a>
                                    <a className="dropdown-item" href="/search/wet/dog">Влажный корм для собак</a>
                                </div>

                            </li>

                            <li className="nav-item dropdown">


                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Для кошек
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/search/sychoy/cat">Сухой корм для кошек</a>
                                    <a className="dropdown-item" href="/search/vlazhny/cat">Влажный корм для кошек</a>
                                </div>

                            </li>
                        </ul>

                    </div>

                </div>

                <form className="form-inline" action="https://adminway.ru/delaem-knopku-input-ssylkoi">
                    <label>
                        {/*Поиск по товарам:*/}
                        <input className="form-control mr-sm-2" onChange={(event) => setValue(event.target.value)}
                               type="search" placeholder="Поиск" aria-label="Search"/> <NavLink
                        to={"/product/search/" + value}><input className="btn btn-outline-danger" type="submit"
                                                               value="Найти"/></NavLink>
                    </label>

                </form>

                <ul><a className="navbar-brand" href="/product/basket_product"><img alt="logo"
                                                                                    src="/image/background/logo/basket_logo.svg"
                                                                                    width="30" height="30"/><span
                    className="text-danger"></span> {props.len_basket != null && props.name !== undefined ? (props.len_basket.length) : (0)}</a></ul>


                <ul></ul>
                {Auth}
                <ul></ul>
                <a className="nav-link" href="/profile"><h6>{props.name}</h6></a>

            </nav>

        </div>


    )
}

export default Nav;